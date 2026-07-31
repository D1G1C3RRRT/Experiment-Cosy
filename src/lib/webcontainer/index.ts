export function getPreviewDocument(title: string) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <style>
      body { font-family: Inter, sans-serif; background: #f4f1ea; color: #1c1d21; display: grid; place-items: center; min-height: 100vh; margin: 0; }
      .card { border: 2px solid #1c1d21; box-shadow: 4px 4px 0 0 #1c1d21; border-radius: 24px; background: rgba(255,255,255,0.85); padding: 24px; max-width: 360px; }
      code { font-family: 'Fira Code', monospace; }
    </style>
  </head>
  <body>
    <div class="card">
      <strong>COSY Studio Preview</strong>
      <p>WebContainer bootstrap is ready. Fallback preview is rendering safely inside an iframe.</p>
      <code>npm run dev</code>
    </div>
  </body>
</html>`;
}
