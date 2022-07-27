import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import color from "common/utils/themeColors";
import reportWebVitals from "./reportWebVitals";
import AuthContextProvider from "modules/auth/containers/AuthProvider";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const queryClient = new QueryClient();
const theme = extendTheme({ color });

root.render(
  <React.StrictMode>
    {/* react-query provider */}
    <QueryClientProvider client={queryClient}>
      {/* chakra provider */}
      <ChakraProvider theme={theme}>
        {/* custom auth provider */}
        <AuthContextProvider>
          <BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />
            <App />
          </BrowserRouter>
        </AuthContextProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
