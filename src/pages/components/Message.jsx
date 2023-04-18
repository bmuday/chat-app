export default function Message({ message }) {
  return (
    <div>
      {message && (
        <>
          <p>{message.text}</p>
          <p>{message.createdAt}</p>
        </>
      )}
    </div>
  );
}
