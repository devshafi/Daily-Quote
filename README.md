# Docker Quote Site
A minimal static site that shows a random quote.
## Build
```bash
docker build -t daily-quote .
```

## Run
```bash
docker run --rm -p 8080:80 daily-quote
# then open http://localhost:8080
```

## Files
- `index.html` – main page
- `styles.css` – simple styling
- `quotes.js` – picks a random quote
- `Dockerfile` – uses `nginx:alpine` to serve static files
- `.dockerignore` – keeps the image clean
