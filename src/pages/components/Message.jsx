export default function Message({ message }) {
  return (
    <div>
      <p>{message.text}</p>
      <p>{message.createdAt}</p>
    </div>
  );
}
