#!/bin/bash
echo "after call ./envReboot.sh of ~/eos-script/installation in another terminal"
echo "the reboot procedure is here"
source ~/eos-script/nodeos/use-eos-script.sh
createAccount.sh alice
createAccount.sh bob
./build.sh
./deploy.sh alice

#
