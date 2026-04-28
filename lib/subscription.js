export function isPaidUser(session) {
  return session?.user?.plan === "paid";
}

export function getExpiryDate(cycle = "monthly") {
  const now = new Date();
  const next = new Date(now);
  if (cycle === "yearly") {
    next.setDate(next.getDate() + 365);
  } else {
    next.setDate(next.getDate() + 30);
  }
  return next;
}

export function formatDate(date) {
  if (!date) return "Not active";
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium"
  }).format(new Date(date));
}
