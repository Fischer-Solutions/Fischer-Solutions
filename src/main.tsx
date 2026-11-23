
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import NotFound from "./NotFound";
import ThankYou from "./ThankYou";
import "./styles.css";

const path = window.location.pathname.replace(/\/+$/, "") || "/";

const normalizedPath = path.replace(/^\/Fischer-Solutions(?=\/|$)/i, "") || "/";

const page =
  normalizedPath === "/"
    ? <App />
    : normalizedPath === "/thank-you"
      ? <ThankYou />
      : <NotFound />;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {page}
  </React.StrictMode>,
);
