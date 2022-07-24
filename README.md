# geth-sandbox

# 起動

```
docker-compose up
```

# コンテナの中に入る

```
docker-compose exec app1 /bin/sh
```

## Geth起動
```
geth --networkid "22" --nodiscover --datadir /geth --http --http.addr "0.0.0.0" console 2>> /geth/error.log
```

## bootnode
```
geth --networkid "22" --datadir /geth --bootnodes "enode://55741305b29e3ab05385eca050698847ad7549a70125f64272e2cacbc8b266e69a74598b4a515c24b596e5a8dd143dfe90b75124272669e46dcd950b7759e69b@app1:30303" console 2>> /geth/info.log
```