import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import "react-quill/dist/quill.snow.css";
import "antd/dist/antd.css";
import Swal from "sweetalert2";
// import "../styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => {
        error instanceof Error
          ? Swal.fire({
              title: error.message,
              icon: "error",
              showConfirmButton: false,
              timer: 1000,
              backdrop: false,
            })
          : Swal.fire({
              title: "접속장애",
              icon: "warning",
              showConfirmButton: false,
              timer: 1000,
              backdrop: false,
            });
      },
      staleTime: 600000,
      cacheTime: 900000,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      onError: (error) => {
        error instanceof Error
          ? Swal.fire({
              title: error.message,
              icon: "error",
              showConfirmButton: false,
              timer: 1000,
              backdrop: false,
            })
          : Swal.fire({
              title: "접속장애",
              icon: "warning",
              showConfirmButton: false,
              timer: 1000,
              backdrop: false,
            });
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
