import { rest } from "msw";
import { endpoints } from "../constants/endpoints";
import { getRandomResponseDelay } from "../utilities/timing";
import { buildEntireUrl } from "../utilities/url";

export const handlers = [
  rest.post(
    buildEntireUrl(endpoints.subscribeToNewsletter),
    (req, res, ctx) => {
      return res(ctx.delay(getRandomResponseDelay()), ctx.status(204));
    },
  ),
];
