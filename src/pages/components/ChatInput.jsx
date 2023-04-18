"use client";

import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../../utils/fetchMessages";

export default function ChatInput() {
  const [input, setInput] = useState("");
  const { data: messages, mutate } = useSWR("/api/getMessages", fetcher, {
    refreshInterval: 1000,
  });

  const addMessage = async (e) => {
    e.preventDefault();

    if (!input) return;

    setInput("");
    const message = {
      text: input,
      username: "Elon Musk",
      profilePicture: "@/public/images/elon-musk.jfif",
    };

    const uploadMessage = async () => {
      const res = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        const message = await res.json();
        console.log("Message added!", message);
      }

      return [message, ...messages];
    };

    await mutate(uploadMessage, {
      optimisticData: [message, ...messages],
      rollbackOnError: true,
    });
  };
  return (
    <form
      onSubmit={addMessage}
      className="sticky bottom-0 z-50 w-full bg-white flex px-10 py-5 space-x-2 border-t border-gray-100"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message here..."
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}
