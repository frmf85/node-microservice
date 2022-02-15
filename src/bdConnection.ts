const { Sequelize } = require('sequelize');

class DbConnection{
    private sequelize = new Sequelize('leilovia','postgres','admin', {
        
        dialect: 'postgres',
        host:'localhost'
    });

    getConnection() {
        if (!this.sequelize) {
          throw new Error('Cannot access Database');
        }
    
        return this.sequelize;
    }

    async connect(){
        try {
            await this.sequelize.authenticate();
            console.log('DataBase Connection has been established successfully.');

            // sync all models with database
            await this.sequelize.sync();
        } catch (error) {
            console.error('Unable to connect to the DataBase:', error);
        }
    }

}

export const dbConnection = new DbConnection();