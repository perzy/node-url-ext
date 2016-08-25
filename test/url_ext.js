const urlExt = require('../');
const assert = require('assert');

const url = 'http://www.xigua110.com/korea/doctors.htm';
const result = urlExt.parseHostnameWithProtocol(url);

assert.equal(result, 'http://www.xigua110.com');
