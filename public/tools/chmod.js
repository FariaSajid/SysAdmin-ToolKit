// chmod calculator: rwxr-xr-x <-> 755

const BITS = { r: 4, w: 2, x: 1 };
const SYMBOLIC = /^[r-][w-][x-][r-][w-][x-][r-][w-][x-]$/;

export function symbolicToOctal(symbolic) {
  const text = String(symbolic).trim();
  if (!SYMBOLIC.test(text)) {
    return null;
  }
  let result = "";
  for (let i = 0; i < 9; i += 3) {
    let digit = 0;
    for (const char of text.slice(i, i + 3)) {
      digit += BITS[char] || 0;
    }
    result += String(digit);
  }
  return result;
}

export function octalToSymbolic(octal) {
  const text = String(octal).trim();
  if (!/^[0-7]{3}$/.test(text)) {
    return null;
  }
  return [...text]
    .map((digit) => {
      const n = Number(digit);
      return (n & 4 ? "r" : "-") + (n & 2 ? "w" : "-") + (n & 1 ? "x" : "-");
    })
    .join("");
}
