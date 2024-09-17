/* @refresh reload */
import { render } from "solid-js/web";
import { App } from "./App";
import "./tailwind.css";

const wrapper = document.getElementById("root");

if (!wrapper) {
	throw new Error("Wrapper div not found");
}

render(() => <App />, wrapper);
