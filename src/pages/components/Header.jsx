import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function Header() {
  const session = false;
  if (session) {
    return (
      <header className="fixed top-0 z-50 bg-white flex justify-between items-center p-5 shadow-sm">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
            height={10}
            width={50}
            alt="Profile Picture"
          />
          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="font-bold text-lg">Baptiste MUDAY</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );
  }
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-5 shadow-sm">
      <div className="flex flex-col space-y-5 items-center">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
            height={10}
            width={50}
            alt="Logo"
          />
          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>
        <Link
          href="/auth/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
