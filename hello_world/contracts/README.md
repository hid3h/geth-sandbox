## コンパイル
```
docker run --rm -v /solファイルがあるディレクトリの絶対パス:/sources ethereum/solc:stable -o /sources/output --abi --bin /sources/HelloWorld.sol
```

docker run --rm -v /Users/hide/hid3h/geth-sandbox/hello_world/contracts:/sources ethereum/solc:stable -o /sources/output --abi --bin /sources/HelloWorld.sol