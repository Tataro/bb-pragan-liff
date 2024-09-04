// components/TopNav.tsx
import Image from "next/image";

export default function TopNav({
  user,
}: {
  user: { name: string; pictureUrl: string } | undefined;
}) {
  //   console.log("user", user);

  return (
    <nav className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="text-xl font-bold">BB Pragan</div>
      <div className="flex items-center space-x-4">
        <Image
          src={user?.pictureUrl ?? "/avatar.png"}
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="font-medium">{user?.name ?? "-"}</span>
      </div>
    </nav>
  );
}
