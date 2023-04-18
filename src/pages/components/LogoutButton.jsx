"use client";

export default function LogoutButton() {
  return (
    <button
      onClick={() => console.log("hello")}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
    >
      Sign out
    </button>
  );
}
