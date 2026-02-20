export function cn(...classes: Array<string | undefined | false | null>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneInternational(phone: string) {
  // very light formatting — keep as-is if already in + format
  return phone.startsWith("+") ? phone : `+${phone}`;
}
