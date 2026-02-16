import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Home route - HTML
app.get('/', (req, res) => {
  res.type('html').send(`
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Honeybelle</title>
    <link rel="stylesheet" href="index.css">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap" rel="stylesheet">
</head>
<body>

<header class="top-bar">
    <div class="logo"></div>
     <a href="index.html" class="logo-link">
        <img src="hblogo.png" alt="Company Logo">
    </a>

    <nav>
        <a href="#">NEW</a>
        <a href="#">CATEGORIES</a>
        <a href="#">GUIDE</a>
        <a href="#">INSTAGRAM</a>
    </nav>
</header>

<section class="hero">
    <img src="dress1.jpg" alt="Best Sellers!">
    <div class="hero-text">
        <h1>Best Sellers!</h1>
        <p>Soft elegance for the season</p>
    </div>
</section>

<section class="info-box">
    <h3>Mission</h3>
    <p>
        Our mission is to create cute, feminine, and elegant clothing that allows individuals to express softness, confidence, and beauty without sacrificing affordability. We are committed to designing thoughtfully crafted pieces that blend charm and elegance, making romantic fashion accessible for everyday wear.
    </p>
    <h3>Vision</h3>
    <p>Our vision is to become a beloved fashion brand known for redefining feminine style—where elegance meets affordability. We aspire to inspire confidence and joy through timeless, delicate designs that celebrate individuality, softness, and modern femininity across the world.</p>
</section>

<footer>
    <p>© 2026 Honeybelle Design</p>
</footer>

</body>
</html>

  `)
})

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'components', 'about.htm'))
})

// Example API endpoint - JSON
app.get('/api-data', (req, res) => {
  res.json({
    message: 'Here is some sample API data',
    items: ['apple', 'banana', 'cherry'],
  })
})

// Health check
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

export default app
