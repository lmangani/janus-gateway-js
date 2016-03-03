var Promise = require('bluebird');
var Client = require('./client');
var JanusError = require('./error');
var WebsocketConnection = require('./websocket-connection');
var Connection = require('./connection');
var Session = require('./session');
var Plugin = require('./plugin');

var toExport = {
  Client: Client,
  Error: JanusError,
  Connection: Connection,
  Session: Session,
  Plugin: Plugin,
  WebsocketConnection: WebsocketConnection
};

if (window) {
  window.Janus = toExport;
  window.Promise = Promise;
}
exports = toExport;
