"use strict";

console.log("Hello, world from popup!")

function setBadgeText(enabled) {
    const text = enabled ? "ON" : "OFF"
    void chrome.action.setBadgeText({text: text})
}

// Handle the ON/OFF switch
const checkbox = document.getElementById("enabled")
chrome.storage.sync.get("enabled", (data) => {
    checkbox.checked = !!data.enabled
    void setBadgeText(data.enabled)
})
checkbox.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement) {
        void chrome.storage.sync.set({"enabled": event.target.checked})
        void setBadgeText(event.target.checked)
    }
})

// Handle the input field
const input = document.getElementById("item")
chrome.storage.sync.get("item", (data) => {
    input.value = data.item || ""
});
input.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement) {
        void chrome.storage.sync.set({"item": event.target.value})
    }
})

const button = document.getElementById("submit")

async function ClickAction(){
    const body = {
        "entries": [
            {
            "company": "Rivadavia",
            "plan": "C",
            "price": "27243,00",
            "suscription": "S/Grua-F. Pauta"
            },
            {
            "company": "Rivadavia",
            "plan": "C",
            "price": "27243,00",
            "suscription": "S/Grua-F. Pauta"
            }
        ]
    }

    const response = await fetch('http://localhost:3000', {
            Method: 'POST',
            Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
            },
            Body: body,
            Cache: 'default'
        }
    )

    console.log(response)

    const blobData = URL.createObjectURL(response.blob());
    window.open(blobData, '_blank');
}

button.onclick = ClickAction;