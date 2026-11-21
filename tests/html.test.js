import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../public/index.html", import.meta.url), "utf8");

test("index.html has the page title", () => {
  assert.match(html, /<title>SysAdmin Toolkit<\/title>/);
});

test("index.html links the CSS and JS files", () => {
  assert.match(html, /href="style\.css"/);
  assert.match(html, /src="app\.js"/);
});

test("index.html has the ids used by app.js", () => {
  for (const id of ["chmod-input", "chmod-btn", "chmod-output", "ip-input", "ip-btn", "ip-output"]) {
    assert.ok(html.includes(`id="${id}"`), `id="${id}" is missing`);
  }
});
