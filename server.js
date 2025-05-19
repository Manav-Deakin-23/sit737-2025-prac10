const express = require('express');
const app = express();

// Use the environment variable PORT or default to 8080
const port = process.env.PORT || 8080;

// Middleware to parse query parameters
app.use(express.urlencoded({ extended: true }));

// Render calculator UI
app.get('/', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Cloud Calculator</title>
      <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background: #1e1e1e;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        h1 { margin-bottom: 20px; }
        input, select, button {
          padding: 10px;
          margin: 8px;
          font-size: 1rem;
          border-radius: 5px;
        }
        .result {
          margin-top: 20px;
          color: #4CAF50;
          font-size: 1.5rem;
        }
      </style>
    </head>
    <body>
      <h1>🧮 Cloud Calculator</h1>
      <form method="GET" action="/calculate">
        <input name="a" type="number" placeholder="First number" required>
        <input name="b" type="number" placeholder="Second number" required>
        <select name="op">
          <option value="add">+</option>
          <option value="sub">−</option>
          <option value="mul">×</option>
          <option value="div">÷</option>
        </select>
        <br/>
        <button type="submit">Calculate</button>
      </form>
    </body>
    </html>
  `);
});

// Handle calculation requests
app.get('/calculate', (req, res) => {
  const { a, b, op } = req.query;
  const x = parseFloat(a), y = parseFloat(b);
  let result = 'Invalid operation';

  switch (op) {
    case 'add': result = x + y; break;
    case 'sub': result = x - y; break;
    case 'mul': result = x * y; break;
    case 'div': result = y !== 0 ? x / y : 'Cannot divide by zero'; break;
  }

  res.send(`
    <html>
      <head>
        <title>Result</title>
        <style>
          body { background: #1e1e1e; color: #fff; text-align: center; padding: 2rem; font-family: sans-serif; }
          a { color: #4CAF50; text-decoration: none; }
        </style>
      </head>
      <body>
        <h1 class="result">✅ Result: ${result}</h1>
        <a href="/">🔁 Back to calculator</a>
      </body>
    </html>
  `);
});

// Healthcheck route
app.get('/health', (req, res) => res.send('OK'));

app.listen(port, '0.0.0.0', () => {
  console.log(`Calculator app running at http://0.0.0.0:${port}`);
});
