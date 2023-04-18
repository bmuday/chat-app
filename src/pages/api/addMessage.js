import redis from "../../../utils/redis";
import { v4 as uuid } from "uuid";

export default async function handler(req, res) {
  try {
    if (req.method != "POST") {
      res.status(405).json({ error: "Method not Allowed" });
      return;
    }

    const { message } = req.body;

    const id = uuid();
    const newMessage = {
      ...message,
      // timestamp of the server
      createdAt: Date.now(),
    };

    // push the new message to upstash redis db
    await redis.hset("messages", { [id]: newMessage });

    res.status(201).json({ message: newMessage });
  } catch (error) {
    console.log("error", error);
  }
}
