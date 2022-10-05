import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import type { ReactNode } from "react";
import { useSubscribeToNewsletterMutation } from "..";
import { endpoints } from "../../../../constants/endpoints";
import { server } from "../../../../mocks/server";
import { getRandomResponseDelay } from "../../../../utilities/timing";
import { buildEntireUrl } from "../../../../utilities/url";

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

describe.skip("useSubscribeToNewsletterMutation", () => {
  it("posts the subscriber payload to the newsletter subscription endpoint", async () => {
    server.use(
      rest.post(
        buildEntireUrl(endpoints.subscribeToNewsletter),
        (req, res, ctx) => {
          return res(ctx.delay(getRandomResponseDelay()), ctx.status(204));
        },
      ),
    );

    const { result } = renderHook(() => useSubscribeToNewsletterMutation(), {
      wrapper: Wrapper,
    });

    const subscriberPayload = {
      firstName: "__FIRST_NAME__",
      emailAddress: "__EMAIL_ADDRESS__",
    };

    expect(result.current.newsletterSubscriptionStatus).toBe("idle");

    result.current.subscribeToNewsletter(subscriberPayload);

    await waitFor(() =>
      expect(result.current.newsletterSubscriptionStatus).toBe("loading"),
    );

    await waitFor(() =>
      expect(result.current.newsletterSubscriptionStatus).toBe("success"),
    );
  });
});
