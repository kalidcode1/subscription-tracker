import arcjet, { shield, detectBot, tokenBucket} from "@arcjet/node";
import { ARCJET_KEY } from "./env.js";

const aj = arcjet({

  key: ARCJET_KEY,
  characteristics: ["ip.src"],
  rules: [
    
    shield({ mode: "LIVE" }),
    
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", 
       ],
    }),
  tokenBucket({
      mode: "LIVE",
      // Tracked by IP address by default, but this can be customized
      // See https://docs.arcjet.com/fingerprints
      //characteristics: ["ip.src"],
      refillRate: 2, // Refill 5 tokens per interval
      interval: 100, // Refill every 10 seconds
      capacity: 2, // Bucket capacity of 10 tokens
    }),
  ],
});

export default aj;