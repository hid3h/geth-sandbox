# geth-sandbox

# 起動

```
docker-compose up
```

# コンテナの中に入る

```
docker-compose exec app1 /bin/sh
```

## Gethの初期化
```
geth --datadir /app/ init /app/genesis.json
```

## Geth起動
```
geth --networkid "22" --nodiscover --datadir /app --http --http.addr "0.0.0.0" console 2>> /app/info.log
```

## bootnode
```
# > admin.nodeInfo.enode の@以前の値に置き換える以下の--bootnodesを
geth --networkid "22" --datadir /app --bootnodes "enode://d36bef9ee44a2b2b2b0e8c926c265ac9a7f741af39326000879965298402370140b42ca631fd96362eeee92a8d952e2233d3816baab958def6747ff2d3e0827a@app1:30303" console 2>> /app/info.log
```
