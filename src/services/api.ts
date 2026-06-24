export const fetchPosts = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch crypto data");
  }

  return response.json();
};

export default fetchPosts;