import type { FormEvent } from "react";
import React, { useState } from "react";
import { useSubscribeToNewsletterMutation } from "../../hooks/mutations/useSubscribeToNewsletter";
import { Button } from "../Button";
import { Card } from "../Card";
import { Spacer } from "../Spacer";
import { Subtitle } from "../Subtitle";
import { TextInput } from "../TextInput";

export const NewsletterSubscriptionForm = () => {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const { subscribeToNewsletter, newsletterSubscriptionStatus } =
    useSubscribeToNewsletterMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    subscribeToNewsletter({ firstName, emailAddress });
  };

  const message =
    newsletterSubscriptionStatus === "success"
      ? "Success! Thanks for subscribing to my newsletter. Please check your inbox."
      : newsletterSubscriptionStatus === "error"
      ? "Oops! Something went wrong subscribing you to my newsletter. Please try again."
      : undefined;

  return (
    <aside>
      <Card>
        <Subtitle>
          A front-end web development newsletter that sparks joy
        </Subtitle>

        <Spacer size="small" />

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
          corrupti aliquam similique voluptatum, nesciunt saepe magnam debitis
          illo eligendi quia?
        </p>

        <Spacer />

        <form onSubmit={handleSubmit} className="flex items-center gap-6">
          <TextInput
            ariaLabel="First Name"
            placeholder="Louis"
            name="first-name"
            id="first-name"
            type="text"
            value={firstName}
            onValueChange={(newFirstName) => setFirstName(newFirstName)}
            isDisabled={newsletterSubscriptionStatus === "loading"}
            isRequired
          />

          <TextInput
            ariaLabel="Email Address"
            placeholder="email@domain.tld"
            name="email-address"
            id="email-address"
            type="text"
            value={emailAddress}
            onValueChange={(newEmailAddress) =>
              setEmailAddress(newEmailAddress)
            }
            isDisabled={newsletterSubscriptionStatus === "loading"}
            isRequired
          />

          <Button
            type="submit"
            isLoading={newsletterSubscriptionStatus === "loading"}
          >
            Subscribe
          </Button>
        </form>

        {message && (
          <>
            <Spacer />

            <p>{message}</p>
          </>
        )}
      </Card>
    </aside>
  );
};
