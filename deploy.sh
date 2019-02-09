#!/bin/bash
source $(dirname $0)/setting.sh
# Use build dir and account name here
#BUILD_DIR=build
#ACCOUNT_NAME=hello
if [ $# -eq 2 ]; then
	BUILD_DIR=$1
	ACCOUNT_NAME=$2
fi 
if [ $# -eq 1 ]; then
	ACCOUNT_NAME=$1
fi

echo "Strat to deploy built result in ./$BUILD_DIR to the account $ACCOUNT_NAME"
#cleos set contract hello ~/test/eos-contract-helloworld/hello -p hello@active
cleos set contract $ACCOUNT_NAME $(dirname $0)/$BUILD_DIR -p $ACCOUNT_NAME@active

echo "contract has been deployed. Please see README.md to learn how to interact with this contract"
