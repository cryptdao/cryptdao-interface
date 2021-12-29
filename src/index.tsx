import "@/index.css";
import Wrapper from "@/layout/Wrapper";
import App from "@/pages/App";
import "antd/dist/antd.css";
import { Buffer } from "buffer";
import { render } from "react-dom";
window.Buffer = Buffer;

render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById("root")
);
