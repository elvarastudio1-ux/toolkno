import { Resend } from "resend";

let _client = null;

function getClient() {
  if (_client) return _client;
  _client = new Resend(process.env.RESEND_API_KEY);
  return _client;
}

export const resend = new Proxy(
  {},
  {
    get(_target, prop) {
      const client = getClient();
      const value = client[prop];
      return typeof value === "function" ? value.bind(client) : value;
    }
  }
);
