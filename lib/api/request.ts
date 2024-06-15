const api = process.env.NEXT_PUBLIC_URL;

export async function login(username: string, password: string) {
  const url = `${api}/login?username=${username}&pwd=${password}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to login:", error);
    return { success: false };
  }
}

export async function fetchStockData() {
  const url = `${api}/getMarketPrice`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch stock data:", error);
    return [];
  }
}
