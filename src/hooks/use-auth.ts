import { axiosClient } from "@/services/api/axios";
import { ILoginForm, IRegisterForm } from "@/types/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
    isLoading,
  } = useSWR(`/auth/me`, {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });

  const router = useRouter();

  async function login(values: ILoginForm): Promise<any> {
    try {
      const res = await axiosClient.post(`/auth/login`, values);
      mutate();
      if (res?.data?.accessToken) {
        router.push("/home");
      }
      if (res?.data?.statusCode >= 400) {
        toast.error(res?.data?.message);
      }
    } catch (err) {
      console.log("error", err);
    }
  }

  async function register(values: IRegisterForm): Promise<any> {
    await axiosClient.post(`/auth/register`, values);
  }

  return { profile, login, register, isLoading };
}
