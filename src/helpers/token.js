export function getTokenCookies() {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith("authToken="));

  if (!match) return null;

  const token = match.split("=")[1];
  try {
    const jwt = atob(token);
    return jwt;
  } catch (error) {
    console.error("Invalid Base64 token", error);
    return null;
  }
}
