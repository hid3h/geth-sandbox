"use strict";
exports.__esModule = true;
var did_resolver_1 = require("did-resolver");
var ethr_did_resolver_1 = require("ethr-did-resolver");
// While experimenting, you can set a rpc endpoint to be used by the web3 provider
// You can also set the address for your own ethr-did-registry contract
var providerConfig = { rpcUrl: 'http://localhost:8545' };
// It's recommended to use the multi-network configuration when using this in production
// since that allows you to resolve on multiple public and private networks at the same time.
// getResolver will return an object with a key/value pair of { "ethr": resolver } where resolver is a function used by the generic did resolver.
var ethrDidResolver = (0, ethr_did_resolver_1.getResolver)(providerConfig);
var didResolver = new did_resolver_1.Resolver(ethrDidResolver);
didResolver.resolve('did:ethr:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74').then(function (doc) { return console.log(doc); });
// You can also use ES7 async/await syntax
// const doc = await didResolver.resolve('did:ethr:0xf3beac30c498d9e26865f34fcaa57dbb935b0d74')
