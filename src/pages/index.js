import ChatInput from "./components/ChatInput";
import MessageList from "./components/MessageList";

export default function Home() {
  return (
    <main>
      <MessageList />
      <ChatInput />
    </main>
  );
}
