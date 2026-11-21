// Build check: site ke zaroori files maujood hain ya nahi.
import { existsSync, readFileSync } from "node:fs";

const required = [
  "public/index.html",
  "public/style.css",
  "public/app.js",
  "public/tools/chmod.js",
  "public/tools/ip.js",
  "vercel.json",
];

let failed = false;

for (const file of required) {
  if (!existsSync(file)) {
    console.error(`MISSING: ${file}`);
    failed = true;
  }
}

if (!failed) {
  const config = JSON.parse(readFileSync("vercel.json", "utf8"));
  if (config.outputDirectory !== "public") {
    console.error("vercel.json: outputDirectory must be \"public\"");
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}
console.log("Site check passed: all required files are present.");
