export function validate_username(username: string): string {
  if (!username || username.trim().length === 0) {
    return "Username is required.";
  }
  return "";
}

export function validate_email(email: string): string {
  if (!email || email.trim().length === 0) {
    return "Email is required.";
  }
  return "";
}
