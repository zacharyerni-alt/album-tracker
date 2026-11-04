export async function getRecommendations(taste) {
  const res = await fetch("/api/recommend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ taste }),
  });

  let data;
  try {
    data = await res.json();
  } catch {
    throw new Error("Invalid response from server.");
  }

  if (!res.ok) {
    throw new Error(data?.error || "Could not get recommendations.");
  }

  return data;
}