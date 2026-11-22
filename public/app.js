import { symbolicToOctal, octalToSymbolic } from "./tools/chmod.js";
import { isValidIPv4, ipType } from "./tools/ip.js";

// ---- chmod calculator ----
const chmodInput = document.getElementById("chmod-input");
const chmodBtn = document.getElementById("chmod-btn");
const chmodOutput = document.getElementById("chmod-output");

chmodBtn.addEventListener("click", () => {
  const value = chmodInput.value.trim()
  const result = /^[0-7]{3}$/.test(value)
    ? octalToSymbolic(value)
    : symbolicToOctal(value);
  chmodOutput.textContent = result === null ? "Invalid input" : result;
});

// ---- IP address checker ----
const ipInput = document.getElementById("ip-input");
const ipBtn = document.getElementById("ip-btn");
const ipOutput = document.getElementById("ip-output");

ipBtn.addEventListener("click", () => {
  const value = ipInput.value.trim();
  ipOutput.textContent = isValidIPv4(value)
    ? `Valid IPv4 (${ipType(value)})`
    : "Invalid IPv4 address";
});
