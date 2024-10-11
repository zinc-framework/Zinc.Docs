export default class Base {
    render(data) {
      return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.title}</title>
            <meta name="description" content="${
              data.metaDescription || "Generic site description"
            }">
            <link rel="stylesheet" href="/styles.css">
          </head>
          <body>
            <main>
            ${data.content}
            </main>
          </body>
        </html>
      `;
    }
  }

  // <link rel="preconnect" href="https://rsms.me/">
    // <link rel="stylesheet" href="https://rsms.me/inter/inter.css">