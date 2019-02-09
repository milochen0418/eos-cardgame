#!/bin/bash
source $(dirname $0)/setting.sh
#eosio-cpp -o hello.wasm hello.cpp --abigen
eosio-cpp -I include -o $CONTRACT_NAME.wasm src/$CONTRACT_NAME.cpp --abigen
rm -rf  ./$BUILD_DIR
mkdir -p ./$BUILD_DIR
mv $CONTRACT_NAME.wasm ./$BUILD_DIR/$BUILD_DIR.wasm
mv $CONTRACT_NAME.abi ./$BUILD_DIR/$BUILD_DIR.abi
