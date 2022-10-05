import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import type { ReactNode } from "react";
import { NewsletterSubscriptionForm } from "..";
import { endpoints } from "../../../constants/endpoints";
import { server } from "../../../mocks/server";
import { buildEntireUrl } from "../../../utilities/url";

const createMockSubscribeToNewsletterEndpointResponse = (
  { statusCode } = { statusCode: 204 },
) => {
  return rest.post(
    buildEntireUrl(endpoints.subscribeToNewsletter),
    (req, res, ctx) => {
      return res(ctx.status(statusCode));
    },
  );
};

const getNewsletterSubscriptionFormControls = () => {
  const firstNameField = screen.getByLabelText("First Name");
  const emailAddressField = screen.getByLabelText("Email Address");

  const subscribeButton = screen.getByRole("button", { name: "Subscribe" });

  return { firstNameField, emailAddressField, subscribeButton };
};

const Wrapper = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe.only("<NewsletterSubscriptionForm />", () => {
  it("displays the newsletter subscription form and allows the user to attempt to subscribe", () => {
    render(<NewsletterSubscriptionForm />, {
      wrapper: Wrapper,
    });

    const title = screen.getByRole("heading", {
      name: "A front-end web development newsletter that sparks joy",
    });

    const text = screen.getByText(
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi corrupti aliquam similique voluptatum, nesciunt saepe magnam debitis illo eligendi quia?",
    );

    const { firstNameField, emailAddressField, subscribeButton } =
      getNewsletterSubscriptionFormControls();

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(firstNameField).toBeEnabled();
    expect(emailAddressField).toBeEnabled();
    expect(subscribeButton).toBeEnabled();
  });

  describe("when a subscription attempt is pending", () => {
    it("indicates that the subscription attempt is pending and prevents the user from attempting to subscribe again", async () => {
      const mockSubscribeToNewsletterEndpointResponse =
        createMockSubscribeToNewsletterEndpointResponse();

      server.use(mockSubscribeToNewsletterEndpointResponse);

      render(<NewsletterSubscriptionForm />, {
        wrapper: Wrapper,
      });

      const user = userEvent.setup();

      const { firstNameField, emailAddressField, subscribeButton } =
        getNewsletterSubscriptionFormControls();

      await user.type(firstNameField, "__FIRST_NAME__");
      await user.type(emailAddressField, "email@domain.tld");

      await user.click(subscribeButton);

      expect(firstNameField).toBeDisabled();
      expect(emailAddressField).toBeDisabled();

      const pendingSubscribeButton = screen.getByRole("button", {
        name: "...",
      });

      expect(pendingSubscribeButton).toBeDisabled();
    });
  });

  describe("when a subscription attempt is successful", () => {
    it("displays the success message and allows the user to attempt to subscribe again", async () => {
      const mockSubscribeToNewsletterEndpointResponse =
        createMockSubscribeToNewsletterEndpointResponse();

      server.use(mockSubscribeToNewsletterEndpointResponse);

      render(<NewsletterSubscriptionForm />, {
        wrapper: Wrapper,
      });

      const user = userEvent.setup();

      const { firstNameField, emailAddressField, subscribeButton } =
        getNewsletterSubscriptionFormControls();

      await user.type(firstNameField, "__FIRST_NAME__");
      await user.type(emailAddressField, "email@domain.tld");

      await user.click(subscribeButton);

      const successMessage = await screen.findByText(
        "Success! Thanks for subscribing to my newsletter. Please check your inbox.",
      );

      expect(successMessage).toBeInTheDocument();

      expect(firstNameField).toBeEnabled();
      expect(emailAddressField).toBeEnabled();
      expect(subscribeButton).toBeEnabled();
    });
  });

  describe("when a subscription attempt is unsuccessful", () => {
    it("displays the error message and allows the user to attempt to subscribe again", async () => {
      const mockSubscribeToNewsletterEndpointResponse =
        createMockSubscribeToNewsletterEndpointResponse({ statusCode: 500 });

      server.use(mockSubscribeToNewsletterEndpointResponse);

      render(<NewsletterSubscriptionForm />, {
        wrapper: Wrapper,
      });

      const user = userEvent.setup();

      const { firstNameField, emailAddressField, subscribeButton } =
        getNewsletterSubscriptionFormControls();

      await user.type(firstNameField, "__FIRST_NAME__");
      await user.type(emailAddressField, "email@domain.tld");

      await user.click(subscribeButton);

      const errorMessage = await screen.findByText(
        "Oops! Something went wrong subscribing you to my newsletter. Please try again.",
      );

      expect(errorMessage).toBeInTheDocument();

      expect(firstNameField).toBeEnabled();
      expect(emailAddressField).toBeEnabled();
      expect(subscribeButton).toBeEnabled();
    });
  });
});
