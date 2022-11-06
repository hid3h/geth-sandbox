## コンパイル
```
docker run --rm -v /solファイルがあるディレクトリの絶対パス:/sources ethereum/solc:stable -o /sources/output --abi --bin /sources/HelloWorld.sol
```