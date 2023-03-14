import { MainLayout } from "@/components/layout";
import { store } from "@/redux";
import { axiosClient } from "@/services/api/axios";
import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types/common";
import { theme } from "@/utils";
import { ThemeProvider } from "@mui/system";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? MainLayout;
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
        shouldRetryOnError: false,
      }}
    >
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    </SWRConfig>
  );
}
export default App;
