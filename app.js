const hello = 'hello cheeks'


window.onload = () => {

    const image = document.querySelector('.image');
    const reset = document.getElementById('reset');
    const body = document.querySelector('body');


    reset.onclick = () => {
        if (body.classList.contains('btn-click')) {
            body.classList.remove('btn-click')
        } else {
            body.classList.add('btn-click')

        }
    }
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <h1>hello</h1>
    </StrictMode>
);
