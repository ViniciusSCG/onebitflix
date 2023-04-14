import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect:'postgres',
    host: 'localhost',
    username: 'vinicius',
    password: '123456',
    database: 'onebitflix_development',
    define:{
        underscored: true,
    }
})