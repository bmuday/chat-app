import Message from "./Message";
import useSWR from "swr";
import fetcher from "../../../utils/fetchMessages";
import Loading from "./Loading";

export default function MessageList() {
  const { data, error } = useSWR("/api/getMessages", fetcher);
  console.log("data", data);
  if (!data) return <Loading />;
  return (
    <div className="p-10">
      {data?.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
