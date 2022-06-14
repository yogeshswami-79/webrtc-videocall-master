const socket = io("");


socket.on("message", (msg) => {
    createMsg(msg, 0);
})

window.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("msg-input");
    const sendBtn = document.getElementById("send-msg-btn");
    initConvo(input, sendBtn);
})

const createMsg = (msg , time) => {
    const msgs_container = document.getElementById("messages-container");

    const msgData = document.createElement('h3');
    const msgTime = document.createElement('h6');

    msgData.textContent = msg;
    msgTime.textContent = time;

    msgs_container.appendChild(msgData);
    // msgs_container.appendChild(msgTime);

}

const initConvo = (input, sendBtn) => {
    sendBtn.addEventListener("click", (event) => {
        const msg = input.value;
        socket.emit("msg", msg);
        input.value = "";
    })
}