const fetcher = async () => {
  try {
    const res = await fetch("/api/getMessages");
    const { messages } = await res.json();
    return messages;
  } catch (error) {
    console.log(error);
  }
};

export default fetcher;
