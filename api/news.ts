export default async function handler(req: any, res: any) {
  const { category = "general" } = req.query;

  const url =
    category === "home"
      ? `https://newsapi.org/v2/everything?q=news&sortBy=popularity&apiKey=${process.env.NEWS_API_KEY}`
      : `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${process.env.NEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
