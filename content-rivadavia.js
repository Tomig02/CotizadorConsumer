"use strict"

const injected_btn = document.createElement("li");
const btn = document.createElement("button")
btn.textContent = "Test Button"
btn.onclick = ClickAction
injected_btn.appendChild(btn)

const elms = document.querySelectorAll("[id='nav']");
elms[1].appendChild(injected_btn); 