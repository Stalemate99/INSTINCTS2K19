let express=require('express');

let app=express();

app.use(express.static('./'));

app.listen(7500);