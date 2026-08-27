import fs from "fs";
import path from "path";

async function testFetch() {
  const url = "https://jhamtani.com/best-locations-to-buy-studio-apartments-in-pune/";
  const imgUrl = "https://jhamtani.com/wp-content/uploads/2025/09/https___jhamtani.com_best-locations-to-buy-studio-apartments-in-pune_.webp";

  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.9",
  };

  try {
    const res = await fetch(url, { headers });
    console.log("Page response status:", res.status);
    const html = await res.text();
    console.log("Page HTML length:", html.length);

    const imgRes = await fetch(imgUrl, { headers });
    console.log("Image response status:", imgRes.status);
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    console.log("Image buffer size:", buffer.length);

    if (!fs.existsSync("public/assets/blogs")) {
      fs.mkdirSync("public/assets/blogs", { recursive: true });
    }
    fs.writeFileSync("public/assets/blogs/test-image.webp", buffer);
    console.log("Saved test-image.webp successfully!");
  } catch (err) {
    console.error("Fetch error:", err);
  }
}

testFetch();
