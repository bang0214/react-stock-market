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

export async function logout(username: string) {
  const url = `${api}/logout?username=${username}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to logout:", error);
    return { success: false };
  }
}

export async function register(username: string, password: string) {
  const url = `${api}/regist?username=${username}&pwd=${password}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to register:", error);
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

export async function fetchStockDetail(code: string) {
  const url = `${api}/getStockPrice?code=${code}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch stock detail:", error);
    return {};
  }
}

export async function trade(
  username: string,
  code: string,
  direction: string,
  price: number,
  amount: number
) {
  const url = `${api}/trade?username=${username}&code=${code}&direction=${direction}&price=${price}&amount=${amount}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to trade:", error);
    return { success: false };
  }
}

export async function fetchBalance(username: string) {
  const url = `${api}/getBalance?username=${username}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch balance:", error);
    return { balance: 0 };
  }
}

export async function fetchHoldings(username: string) {
  const url = `${api}/getInventory?username=${username}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch holdings:", error);
    return [];
  }
}

export async function fetchTransactions(username: string) {
  const url = `${api}/getTradeRecord?username=${username}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch transactions:", error);
    return [];
  }
}
