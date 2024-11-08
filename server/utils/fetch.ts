import { ProxyAgent } from "undici";
import { $fetch } from "ofetch";

const proxyAgent = new ProxyAgent("http://localhost:3128");
const data = await $fetch("https://icanhazip.com", { dispatcher: proxyAgent });
export const myFetch = $fetch.create({
  headers: {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36",
  },
  timeout: 10000,
  retry: 3,
})
