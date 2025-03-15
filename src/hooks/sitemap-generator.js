import { SitemapStream } from "sitemap";
import fs from "fs";

const siteUrl = "https://aksoypark.com.tr";

const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/works", changefreq: "monthly", priority: 0.8 },
  { url: "/information", changefreq: "monthly", priority: 0.8 },
  { url: "/examples", changefreq: "monthly", priority: 0.8 },
  { url: "/admin", changefreq: "yearly", priority: 0.1 },
];

const sitemapStream = new SitemapStream({ hostname: siteUrl });

const writeStream = fs.createWriteStream("./public/sitemap.xml");

sitemapStream.pipe(writeStream); // stream'i dosyaya yazdırmak için pipe kullanıyoruz

links.forEach(link => sitemapStream.write(link)); // Verileri yazıyoruz
sitemapStream.end(); // Sonlandırıyoruz

writeStream.on("finish", () => {
  console.log("✅ Sitemap oluşturuldu: public/sitemap.xml");
});

writeStream.on("error", (err) => {
  console.error("❌ Sitemap oluşturulurken hata oluştu:", err);
});