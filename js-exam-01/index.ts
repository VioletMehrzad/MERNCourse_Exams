import {
    randomNumButton,
    primeNumButton,
    resetButton
} from "./src/importer.js";
import {
    randomNumButtonHandler,
    primeNumButtonHandler,
    resetButtonHandler
} from "./src/events.js";

randomNumButton?.addEventListener("click", randomNumButtonHandler);
primeNumButton?.addEventListener("click", primeNumButtonHandler);
resetButton?.addEventListener("click", resetButtonHandler);