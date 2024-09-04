"use client";

import { createContext, useContext, useEffect, useState } from "react";
import liff from "@line/liff";
import LineLoading from "../ui/LineLoading";

const UserContext = createContext<any>(null);

export const useUser = (): Profile => useContext(UserContext);

export type Profile = {
  userId: string;
  displayName: string;
  pictureUrl: string;
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initLiff = async () => {
      try {
        await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! });
        if (liff.isLoggedIn()) {
          const profile = (await liff.getProfile()) as Profile;
          setUser(profile);
        } else {
          liff.login();
        }
        setLoading(false);
      } catch (error) {
        console.error("LIFF init error:", error);
        // TODO: Handle error
      }
    };

    initLiff();
  }, []);

  if (loading) {
    return <LineLoading />;
  }

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
