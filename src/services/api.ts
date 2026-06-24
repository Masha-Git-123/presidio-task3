
export const fetchPosts = async () => {
  const response = await fetch(
    "https://universities.hipolabs.com/search?country=India"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return response.json();
};

export default fetchPosts;