import * as snoowrap from "snoowrap";

const reddit = new snoowrap({
  userAgent: "react-sandbox",
  clientId: import.meta.env.VITE_REDDIT_CLIENT_ID as string,
  clientSecret: import.meta.env.VITE_REDDIT_CLIENT_SECRET as string,
  username: import.meta.env.VITE_REDDIT_USER as string,
  password: import.meta.env.VITE_REDDIT_PASSWORD as string,
});

export default reddit;
