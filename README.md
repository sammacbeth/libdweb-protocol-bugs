# libdweb-protocol-bugs

This repo demonstrates two bugs with the [libdweb](https://github.com/mozilla/libdweb) protocol handler.
These are not bugs with the handler itself, rather how Firefox handles pages of these custom protocols,
leading to bugs in web APIs. For each failing example, the extension demonstrates the same HTML and JS code 
working correctly on a `moz-extension` page, to show that this is not expected behaviour.

The issues demonstrated are:
 1. [Contenteditable](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) elements cannot
 be selected or edited.
 2. The IndexedDB API fails on open. The error in browser console is:
 ```
 Quota originNoSuffix (moz-nullprincipal:{7f25a3f0-ec0f-4acf-a9f2-f593a959f431}) doesn't match passed one (test://indexeddb)!: ActorsParent.cpp:6104
 ```

## Running locally

```bash
npm install
npm start
```
