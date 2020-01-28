module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": "mysql",
        "operatorsAliases": false,
        "define": {
            "timestamps": false,
            "freezeTableName": true
        },

    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "dialect": "mysql",
        "operatorsAliases": false,
        "define": {
            "timestamps": false,
            "freezeTableName": true
        }
    }
}