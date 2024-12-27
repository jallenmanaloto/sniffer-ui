import axios from "axios";

export async function analyze(urls: string[]) {
  const analyzeEndpoint = process.env.NEXT_PUBLIC_ANALYZE_ENDPOINT || "";
  const res = await axios.post(analyzeEndpoint, {
    urls: urls,
  });

  return res?.data;
}

export async function healthCheck() {
  try {
    const res = await axios.get('/api/v1/health');
    if (res.status === 200) {
      return false;
    }
  } catch (err) {
    return true;
  }
}
