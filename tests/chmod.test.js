import { test } from "node:test";
import assert from "node:assert/strict";
import { symbolicToOctal, octalToSymbolic } from "../public/tools/chmod.js";

test("symbolicToOctal(): rwxr-xr-x is 755", () => {
  assert.equal(symbolicToOctal("rwxr-xr-x"), "755");
});

test("symbolicToOctal(): rw-r--r-- is 644", () => {
  assert.equal(symbolicToOctal("rw-r--r--"), "644");
});

test("symbolicToOctal(): invalid text gives null", () => {
  assert.equal(symbolicToOctal("hello"), null);
});

test("octalToSymbolic(): 755 is rwxr-xr-x", () => {
  assert.equal(octalToSymbolic("755"), "rwxr-xr-x");
});

test("octalToSymbolic(): 600 is rw-------", () => {
  assert.equal(octalToSymbolic("600"), "rw-------");
});

test("octalToSymbolic(): 999 is invalid", () => {
  assert.equal(octalToSymbolic("999"), null);
});
