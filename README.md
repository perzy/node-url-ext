url-ext
===============
Core url lib extension. 
[![NPM version](https://badge.fury.io/js/url-ext.png)](http://badge.fury.io/js/url-ext)

## Installation

```sh
$ npm install --save url-ext
```

## Usage

```js
var urlExt = require('url-ext');
var url = 'http://www.xxx.com:8080/search?q=jerrywu#hello';
var hostnameWithProtocol = urlExt.parseHostnameWithProtocol(url);
console.log('hostnameWithProtocol: %s', hostnameWithProtocol); // http://www.xxx.com
```

## License
The MIT License.
