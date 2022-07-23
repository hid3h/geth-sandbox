# geth-sandbox

# 起動

```
docker-compose up
```

# コンテナの中に入る

```
docker-compose exec app /bin/sh
```

Geth起動
```
geth --networkid "22" --nodiscover --datadir /geth --http --http.addr "0.0.0.0" --http.port "8545" console 2>> /geth/error.log
```
