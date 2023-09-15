import { Sequelize } from "sequelize";
import dotenv from "./dotenv";
dotenv.config();

const sequelize = new Sequelize(String(process.env.DATABASE_MYSQL), String(process.env.USER_MYSQL), String(process.env.PASSWORD_MYSQL), {
    host: String(process.env.HOST_MYSQL),
    dialect: 'mariadb',
    logging: true,
    dialectOptions: {
      useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: function (field:any, next:any) { // for reading from database
        if (field.type === 'DATETIME') {
          return field.string()
        }
          return next()
        },
    },
    timezone: '-07:00',
    
  });

  export default sequelize;