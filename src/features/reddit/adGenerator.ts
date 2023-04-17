import reddit from "./reddit";
import { Submission, Comment, RedditUser } from "snoowrap";

interface ExampleAd {
  title: string;
  description: string;
}

async function getUserInterests(username: string): Promise<string[]> {
  console.log(reddit);
  debugger;
  const user = (await reddit.getUser(username)) as RedditUser;
  const posts: Submission[] = await user.getSubmissions({ limit: 100 });
  const comments: Comment[] = await user.getComments({ limit: 100 });

  const subreddits = new Set<string>();
  posts.forEach((post) => subreddits.add(post.subreddit.display_name));
  comments.forEach((comment) => subreddits.add(comment.subreddit.display_name));

  return Array.from(subreddits);
}

async function generateExampleAd(username: string): Promise<ExampleAd> {
  const interests = await getUserInterests(username);

  // Based on the user's interests, you can generate an example ad.
  // For simplicity, we'll pick a random interest and generate an ad.
  const randomInterest =
    interests[Math.floor(Math.random() * interests.length)];

  const exampleAd: ExampleAd = {
    title: `Special offer for /r/${randomInterest} users!`,
    description: `Get the best deals on products related to /r/${randomInterest}. Limited time offer!`,
  };

  return exampleAd;
}

export { getUserInterests, generateExampleAd };
