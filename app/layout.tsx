"use client";

import { Sarabun } from "next/font/google";
import "./globals.css";
import TopNav from "./ui/TopNav";
import { useEffect, useState } from "react";
import liff from "@line/liff";

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [user, setUser] = useState<
    { name: string; pictureUrl: string } | undefined
  >(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initLiff = async () => {
      try {
        await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! });
        if (liff.isLoggedIn()) {
          const profile = await liff.getProfile();
          // console.log("profile", profile);
          setUser({
            name: profile.displayName,
            pictureUrl: profile.pictureUrl || "/default-profile.png",
          });
          setLoading(false);
        } else {
          liff.login();
        }
      } catch (error) {
        console.error("LIFF init error:", error);
      }
    };
    initLiff();
  }, []);

  return (
    <html lang="en">
      <body className={`${sarabun.className} min-h-screen bg-gray-100`}>
        {loading ? (
          <main>
            <div className="flex items-center flex-col justify-center h-screen gap-4">
              <div className="text-center">
                <p className="text-lg font-semibold">กำลังเชื่อมต่อ LINE</p>
              </div>
              <svg
                className="animate-spin -ml-1 mr-3 h-8 w-8 text-[#ccc]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75 text-[#06C755]"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          </main>
        ) : (
          <>
            <TopNav user={user} />
            <main className="p-8">{children}</main>
          </>
        )}
      </body>
    </html>
  );
}
