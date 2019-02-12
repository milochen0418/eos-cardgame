# eos-cardgame
eos-cardgame  
Arch.  
![image](https://d1mrsgzqahfqns.cloudfront.net/tutorial/lessons/v6/image13.png)  
  
## Use eos-script
### If you have no eos-script environemnet , you can use the following way
$ cd ~/  
$ git clone https://github.com/milochen0418/eos-script  
$ source ~/eos-script/nodeos/use-eos-script.sh  

## create basic environment by eos-script
$ createAccount.sh cardgameacc
$ createAccount.sh alice  
$ createAccount.sh bob  
$ ./build.sh  
$ ./deploy.sh cardgameacc

## interact with contracts
