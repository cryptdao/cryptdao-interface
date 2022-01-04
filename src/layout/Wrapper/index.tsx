import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
const queryClient = new QueryClient();
export default function Wrapper(props: { children: React.ReactChild }) {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{props.children}</BrowserRouter>
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </RecoilRoot>
    </React.StrictMode>
  );
}
