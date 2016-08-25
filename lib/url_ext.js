'use strict';

const URL = require('url');

exports.parseHostnameWithProtocol = function( url ){
  const parsed = URL.parse(url);

  return parsed.protocol + (parsed.slashes ? '//' : '') + parsed.hostname;
};

exports.parseHostWithProtocol = function( url ){
  const parsed = URL.parse(url);

  return parsed.protocol + (parsed.slashes ? '//' : '') + parsed.host;
};