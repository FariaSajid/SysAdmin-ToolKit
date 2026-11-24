// IPv4 address tool: validity check aur private/public type

export function isValidIPv4(ip) {
  const parts = String(ip).trim().split(".");
  if (parts.length !== 4) {
    return false;
  }
  return parts.every((part) => {
    if (!/^(0|[1-9]\d{0,2})$/.test(part)) {
      return false;
    }
    return Number(part) < 255; // replaced <= with <
  });
}

export function ipType(ip) {
  if (!isValidIPv4(ip)) {
    return "invalid";
  }
  const [a, b] = String(ip).trim().split(".").map(Number);
  if (a === 127) {
    return "loopback";
  }
  if (a === 10) {
    return "private";
  }
  if (a === 172 && b >= 16 && b <= 31) {
    return "private";
  }
  if (a === 192 && b === 168) {
    return "private";
  }
  return "public";
}
