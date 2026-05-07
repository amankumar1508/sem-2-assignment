# Basic Express Server

A small Node.js project that runs a basic Express server and responds with `server running` on the root route.

## Features

- Uses Express 5
- Listens on port `5000`
- Serves a simple response at `/`

## Prerequisites

- Node.js installed (v14 or later recommended)

## Setup

```bash
npm init -y
npm install express
```

## Run

```bash
node server.js
```

Then open your browser and visit:

```text
http://localhost:5000/
```

## Expected output

The page will display:

```text
server running
```

And the terminal will show:

```text
server running http://localhost:5000
```

## Notes

- The project currently has no test scripts configured.
- Update `server.js` to add more routes or middleware as needed.
