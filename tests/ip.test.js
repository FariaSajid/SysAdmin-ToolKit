import { test } from "node:test";
import assert from "node:assert/strict";
import { isValidIPv4, ipType } from "../public/tools/ip.js";

test("isValidIPv4(): normal address is valid", () => {
  assert.equal(isValidIPv4("192.168.1.10"), true);
});

test("isValidIPv4(): 255 is allowed in an octet", () => {
  assert.equal(isValidIPv4("192.168.1.255"), true);
  assert.equal(isValidIPv4("255.255.255.255"), true);
});

test("isValidIPv4(): 256 is not allowed", () => {
  assert.equal(isValidIPv4("192.168.1.256"), false);
});

test("isValidIPv4(): wrong number of parts is invalid", () => {
  assert.equal(isValidIPv4("192.168.1"), false);
  assert.equal(isValidIPv4("1.2.3.4.5"), false);
});

test("isValidIPv4(): letters are invalid", () => {
  assert.equal(isValidIPv4("192.168.one.1"), false);
});

test("ipType(): private ranges", () => {
  assert.equal(ipType("10.0.0.5"), "private");
  assert.equal(ipType("172.16.4.1"), "private");
  assert.equal(ipType("192.168.0.1"), "private");
});

test("ipType(): public and loopback", () => {
  assert.equal(ipType("8.8.8.8"), "public");
  assert.equal(ipType("127.0.0.1"), "loopback");
});

test("ipType(): bad input is invalid", () => {
  assert.equal(ipType("999.1.1.1"), "invalid");
});
