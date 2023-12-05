const express = require('express');
const app = express();
const defaultPort = 3000;

const port = process.env.PORT || defaultPort;

function constructPage(text) {
  return `
    <html>
      <head>
        <title>My App</title>
      </head>
      <body>
        <h1>${text}</h1>
      </body>
    </html>
  `;
}

app.get('/', (req, res) => {
  const html = constructPage(`
    <div>
      <h1>My App</h1>
      <p>Home page from ${port}</p>
      <a href="/about">About page</a>
      <a href="/faq">Faq page</a>
    </div>
  `);

  res.send(html);
});

app.get('/about', (req, res) => {
  const html = constructPage(`
    <div>
      <h1>My App</h1>
      <p>About page from ${port}</p>
      <a href="/">Home page</a>
      <a href="/faq">Faq page</a>
      
    </div>
  `);
  res.send(html);
});

app.get('/faq', (req, res) => {
  const html = constructPage(`
    <div>
      <h1>My App</h1>
      <p>Faq page from ${port}</p>
      <a href="/">Home page</a>
      <a href="/about">About page</a>
    </div>
  `);
  res.send(html);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})