"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _solidClient = require("@inrupt/solid-client");

var _vocabCommonRdf = require("@inrupt/vocab-common-rdf");

const profileStruct = {
  name: {
    predicate: _vocabCommonRdf.FOAF.name,
    parse: _solidClient.getStringNoLocale,
    set: _solidClient.setStringNoLocale
  },
  nickname: {
    predicate: _vocabCommonRdf.FOAF.nick,
    parse: _solidClient.getStringNoLocale,
    set: _solidClient.setStringNoLocale
  },
  email: {
    predicate: _vocabCommonRdf.VCARD.email,
    parse: _solidClient.getStringNoLocale,
    set: _solidClient.setStringNoLocale
  },
  pic: {
    predicate: _vocabCommonRdf.VCARD.photo,
    parse: _solidClient.getStringNoLocale,
    set: _solidClient.setStringNoLocale
  }
};
var _default = profileStruct;
exports.default = _default;