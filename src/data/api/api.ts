import axios from "axios";

export async function analyze(urls: string[]) {
  const analyzeEndpoint = process.env.NEXT_PUBLIC_ANALYZE_ENDPOINT || "";
  const res = await axios.post(analyzeEndpoint, {
    urls: urls,
  });

  return res?.data;
}

export async function healthCheck() {
  const healthCheckEndpoint = process.env.NEXT_PUBLIC_HEALTH_CHECK_ENDPOINT || "";
  const res = await axios.get(healthCheckEndpoint);
  if (res.status === 200) {
    return false;
  } else {
    return true;
  }
}
