import { axiosClient } from "@/services/api/axios";
import { ILoginForm, IRegisterForm } from "@/types/auth";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
    isValidating,
  } = useSWR(`/auth/me`, {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });
  async function login(values: ILoginForm): Promise<any> {
    await axiosClient.post(`/auth/login`, values);
    mutate();
  }

  async function register(values: IRegisterForm): Promise<any> {
    await axiosClient.post(`/auth/register`, values);
  }

  return { profile, login, register };
}
