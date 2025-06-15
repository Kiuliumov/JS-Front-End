document.addEventListener("DOMContentLoaded", solve);

function solve() {
  const encodeForm = document.querySelector("#encode");

  encodeForm.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    const textarea = e.target.parentNode.querySelector("textarea");
    const messageToEncode = textarea.value;

    const encode = (msg) =>
      [...msg]
        .map((char) => char.charCodeAt(0) + 1)
        .map((asciiChar) => String.fromCharCode(asciiChar))
        .join("");
    const encodedMessage = encode(messageToEncode);
    const reciever = document
      .querySelector("#decode")
      .querySelector("textarea");
    reciever.value = encodedMessage;
    textarea.value = "";
  });

  const decodeForm = document.querySelector("#decode");

  decodeForm.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    const textarea = e.target.parentNode.querySelector("textarea");
    const encodedMessage = textarea.value;
    const decode = (msg) => {
      return [...msg]
        .map((char) => char.charCodeAt(0) - 1)
        .map((asciiChar) => String.fromCharCode(asciiChar))
        .join("");
    };

    const decodedMessage = decode(encodedMessage);
    textarea.value = decodedMessage;
  });
}
