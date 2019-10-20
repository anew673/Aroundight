const fs=require("fs")
fs.writeFileSync("portfolio.json","[")
for(i=0;i<20000;i++){
  fs.appendFileSync("portfolio.json","{name:'产品"+i+"',code:'c"+i+"'},")
}
fs.appendFileSync("portfolio.json","]")