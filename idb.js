var request = window.indexedDB.open("MyTestDatabase", 3);
request.onerror = function(event) {
  document.getElementById('test').innerText = 'Error opening indexeddb';
};
request.onsuccess = function(event) {
  document.getElementById('test').innerText = 'Indexeddb works!';
};