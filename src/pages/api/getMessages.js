import redis from "../../../utils/redis";

export default async function handler(req, res) {
  try {
    if (req.method != "GET") {
      res.status(405).json({ error: "Method not Allowed" });
      return;
    }

    const data = await redis.hvals("messages");
    const messages = data.sort((a, b) => a.createdAt - b.createdAt);

    res.status(200).json({ messages });
  } catch (error) {
    console.log("error", error);
  }
}
