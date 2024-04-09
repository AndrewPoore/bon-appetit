import { lastModified, checkLocalStorage, closeMessage } from "./utils.mjs";

lastModified();
checkLocalStorage();
document.querySelector('.message-btn').addEventListener('click', closeMessage);