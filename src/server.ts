import express from 'express';
import { sequelize } from './database';
import { AdminJsRouter, adminJs } from './adminjs';

const app = express();

app.use(express.static('public'));

app.use(adminJs.options.rootPath, AdminJsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    sequelize.authenticate().then(() =>{
        console.log('db connection successful');
    })
    console.log(`listening on port ${PORT}`);

});