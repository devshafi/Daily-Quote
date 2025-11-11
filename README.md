# Docker Quote Site
A minimal static site that shows a random quote. Perfect for a quick Docker demo.

## Build
```bash
docker build -t quote-site .
```

## Run
```bash
docker run --rm -p 8080:80 quote-site
# then open http://localhost:8080
```

## Files
- `index.html` – main page
- `styles.css` – simple styling
- `quotes.js` – picks a random quote
- `Dockerfile` – uses `nginx:alpine` to serve static files
- `.dockerignore` – keeps the image clean
