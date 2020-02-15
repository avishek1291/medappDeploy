const express =  require('express');
const bodyparser =  require('body-parser');
const app =  express();
const path =  require('path');
app.use(bodyparser.json());

app.use('/', express.static(path.join(__dirname, 'public/med-app')));
app.listen(process.env.PORT|| 3000, () => {
     console.log('server started at port: 3000');
 })