import Image from "next/image";
import Link from "next/link";
import { FaFire } from "react-icons/fa";

export default function Home() {
  const date = new Date().getFullYear();

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center">
      <div className="flex items-center flex-col justify-center space-y-2">
        <FaFire style={{ color: "#FF4500" }} size={30} />
        <p className="text-xl"> 🚧 Website coming soon</p>
        <p className="text-sm text-gray-600">
          Building something awesome. Stay tuned!
        </p>
        <span>
          &copy; {date}{" "}
          <Link
            href="https://jeevangaire.com.np/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Jeevan Gaire
          </Link>
          . All rights reserved.
        </span>
      </div>
    </div>
  );
}
