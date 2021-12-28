import Wrapper from "@/components/Wrapper";
import "@/index.css";
import App from "@/pages/App";
import { Buffer } from "buffer";
import { render } from "react-dom";
window.Buffer = Buffer;

render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById("root")
);
