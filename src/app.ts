import express from 'express';

import db from './db/db';

const app = express();

app.use(express.urlencoded({extended: true}))


app.get('/', async (req, res) => {

    const roles = await db.select('*').from('roles');
    res.send({result: "ok", data: roles});
    console.log('roles', roles);
    
    res.end();
})



app.listen(8080, () => {
    console.log('server is running');
    
})