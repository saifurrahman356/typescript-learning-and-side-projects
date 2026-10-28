const message = document.getElementById("message");
const charCount = document.getElementById("char-count");
const sendButton = document.getElementById("send-button");

if (!(message instanceof HTMLTextAreaElement)) {
  throw new Error("Element #message not found");
}

if (!(charCount instanceof HTMLParagraphElement)) {
  throw new Error("Element #char-count not found");
}

if (!(sendButton instanceof HTMLButtonElement)) {
  throw new Error("Element #send-button not found");
}

message.addEventListener("input", (event) => {
  const textArea = event.target;

  if (!(textArea instanceof HTMLTextAreaElement)) {
    return;
  }

  const count = textArea.value.length;
  charCount.textContent = `${count}/140`;

  if (count > 140) {
    sendButton.disabled = true;
  } else {
    sendButton.disabled = false;
  }
});
