import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

export function Auth({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { profile } = useAuth();
  useEffect(() => {
    if (!profile?.data?.id) {
      router.push("/auth/login");
    }
  }, []);

  return <div>{children}</div>;
}
