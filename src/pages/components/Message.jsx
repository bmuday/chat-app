export default function Message({ message }) {
  console.log("message", message);
  const { text, createdAt, username } = message;
  return (
    <div>
      <p>Message</p>
      <p>{text}</p>
      <p>{createdAt}</p>
    </div>
  );
}
