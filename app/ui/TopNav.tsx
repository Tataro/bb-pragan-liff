// components/TopNav.tsx
import Image from "next/image";

export default function TopNav() {
  return (
    <nav className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="text-xl font-bold">BB Pragan</div>
      <div className="flex items-center space-x-4">
        <Image
          src="/profile.jpg"
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-medium">User Name</span>
      </div>
    </nav>
  );
}
