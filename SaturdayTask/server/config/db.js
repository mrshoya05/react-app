import { Sequelize } from 'sequelize';

const connect = new Sequelize('task', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const connectDb = async () => {
    try {
        await connect.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

connectDb();

export default connect;
