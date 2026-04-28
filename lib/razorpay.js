import Razorpay from "razorpay";

let _client = null;

function getClient() {
  if (_client) return _client;
  _client = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  });
  return _client;
}

// Proxy defers SDK construction until first property access (request time, not build time).
export const razorpay = new Proxy(
  {},
  {
    get(_target, prop) {
      const client = getClient();
      const value = client[prop];
      return typeof value === "function" ? value.bind(client) : value;
    }
  }
);
