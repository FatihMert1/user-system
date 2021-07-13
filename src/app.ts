import express from 'express';
import dotenv from 'dotenv';

import db from './db/db';
import checkXApiKey from './middlewares/check-middleware';
import handleError from './middlewares/error-handler';
import selectLanguage from './middlewares/select-lang';


dotenv.config();

const app = express();

app.use(express.urlencoded({extended: true}))

app.use(selectLanguage);
app.use(checkXApiKey);


app.get('/', async (req, res) => {

    const roles = await db.select('*').from('roles');
    res.send({result: "ok", data: roles});
    console.log('roles', roles);
    
    res.end();
})



app.use(handleError);


app.listen(8080, () => {
    console.log('server is running');
    
})