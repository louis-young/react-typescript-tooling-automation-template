import { useMutation } from "@tanstack/react-query";
import { endpoints } from "../../../constants/endpoints";
import { post } from "../../../utilities/http";
import { buildEntireUrl } from "../../../utilities/url";
import type { SubscribeToNewsletterFormValues } from "./types";

export const useSubscribeToNewsletterMutation = () => {
  const subscribeToNewsletterUrl = buildEntireUrl(
    endpoints.subscribeToNewsletter,
  );

  const {
    mutate: subscribeToNewsletter,
    status: newsletterSubscriptionStatus,
  } = useMutation(
    async ({ firstName, emailAddress }: SubscribeToNewsletterFormValues) => {
      return post<never>({
        endpoint: subscribeToNewsletterUrl,
        payload: { firstName, emailAddress },
      });
    },
  );

  return {
    subscribeToNewsletter,
    newsletterSubscriptionStatus,
  };
};
