# CORS Playground (Frontend Only Demo)

This project is a **frontend-only request testing UI**. It simulates how a CORS proxy tool would look, but **does not include any backend server or proxy functionality**.

In other words: it looks powerful, but it currently has no actual authority.

## Features

* HTTP request builder (GET, POST, PUT, PATCH, DELETE)
* Custom headers input (JSON format)
* Request body support
* Response viewer UI
* Timeout simulation logic
* Proxy URL input (for future backend use)

## Important Reality Check

This project:

* ❌ Does NOT bypass CORS
* ❌ Does NOT include a proxy server
* ❌ Does NOT modify browser security rules

Right now it is just a **UI + request simulator**.

If you try to use it against real cross-origin APIs, the browser will politely refuse (as it should).

## How It Currently Works

Since there is no backend, you have two options:

### 1. Mock / Local Testing

You can use it as a UI tool only, for example:

* Designing API request flows
* Preparing payloads
* Debugging request structure

### 2. Future Upgrade Path

If you want real cross-origin requests, you need to add a backend proxy such as:

* Node.js + Express proxy server
* `cors-anywhere` clone
* nginx reverse proxy

Then update the proxy base URL field in the UI.

## How to Use

### 1. Open the file

Open `index.html` directly in your browser or deploy via GitHub Pages.

### 2. Fill request fields

* Target URL (API endpoint)
* HTTP method
* Headers (JSON)
* Optional body

### 3. Click Send

It will attempt a fetch request, but only same-origin or CORS-allowed APIs will succeed.

## Example Target (works without backend)

```
https://jsonplaceholder.typicode.com/todos/1
```

## GitHub Pages Deployment

You can still host this UI on GitHub Pages:

1. Push repo to GitHub
2. Ensure `index.html` exists in root
3. Enable GitHub Pages (main branch / root)
4. Open generated URL

## Limitations

* No backend = no proxy
* CORS restrictions fully apply
* Proxy field is currently decorative

## Summary

This is a **request UI simulator pretending to be a proxy tool**, waiting for a backend to give it meaning.

Until then, it is mostly vibes and buttons.

## License

MIT (or whatever you f
