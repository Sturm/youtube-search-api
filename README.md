# Youtube search 

Asynchronous youtube search with response available as Promise object.

## Example usage:
```javascript
/* Get Response */
let youtube = new Youtube("..."); // enter your API Key
let response = youtube.searchVideosByPhrase("cats", 12); // phrase to search e.g. cats | search limit

/* Accessing response */
response.then(result => {
    // Here
    console.log(result)
});
```

## How to build?
```
# TypeScript installation:
npm install -g typescript

# Build files:
tsc
```

## Author:

* **Hubert Rządziński** - [GitHub](https://github.com/Sturmpl) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details

