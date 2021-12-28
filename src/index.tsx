import Wrapper from "@/components/Wrapper";
import App from "@/pages/App";
import { Buffer } from "buffer";
import { render } from "react-dom";
import "tailwindcss/tailwind.css";

window.Buffer = Buffer;

render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById("root")
);
