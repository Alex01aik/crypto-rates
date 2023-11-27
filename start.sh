#!/bin/bash

image_name="crypto-rates-app"

if [ -f "currencies.txt" ]; then
  while IFS= read -r currency || [ -n "$currency" ]; do

  if docker ps -a --format '{{.Names}}' | grep -q "^$currency$"; then
    docker stop "$currency"
    docker rm "$currency"
    echo "Removed existing container for $currency"
  fi

  docker run -d --name "$currency" \
    -e DATABASE_URL="postgresql://root:root@db:5432/rates" \
    -e BASE_CURRENCY="$currency" \
    -e QUOTE_CURRENCY="usdt" \
    -e BINANCE_WS_URL="wss://stream.binance.com:9443/ws/" \
    -v "$(pwd)":/usr/src/app/ \
    "$image_name"

    echo "Started container for $currency"
  done < "currencies.txt"
else
  echo "File 'currencies.txt' not found. Please create it with the currency names."
  exit 1
fi