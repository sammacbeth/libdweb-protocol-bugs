
browser.protocol.registerProtocol('test', (request) => {
  switch(request.url) {
    case 'test://contenteditable/':
      return new Response(`<!doctype html>
      <html><head><title>test://contenteditable</title>
      <body>
        <p>You should be able to get a cursor into the div below.</p>
        <div contenteditable="true" style="border: 1px dashed black">Hello there</div>
      </body>
      </html>
      `, {
        headers: {
          'content-type': 'text/html',
        }
      })
    case 'test://indexeddb/': {
      return new Response(`<!doctype html>
      <html><head><title>test://indexeddb</title></head>
      <body>
        <p id="test">Testing IndexedDB...</p>
        <script>
        try {
          var request = window.indexedDB.open("MyTestDatabase", 3);
          request.onsuccess = function(event) {
            document.getElementById('test').innerText = 'Indexeddb works!';
          };
        } catch (e) {
          document.getElementById('test').innerText = 'Error opening indexeddb: ' + e.toString();
        }
        </script>
      </body>
      </html>`, {
        headers: {
          'content-type': 'text/html',
        }
      })
    }
  }
});

browser.tabs.create({ url: browser.runtime.getURL('tests.html') })

