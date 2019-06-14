
browser.protocol.registerProtocol('test', (request) => {
  switch(request.url) {
    case 'test://contenteditable/': {
      return new Response(`<!doctype html>
      <html>
      <body>
        <p>You should be able to get a cursor into the div below.</p>
        <div contenteditable="true" style="border: 1px dashed black">Hello there</div>
      </body>
      </html>
      `, {
        headers: {
          'content-type': 'text/html',
        }
      });
    }
  }
});
