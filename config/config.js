module.exports = {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": "milestones_db",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false,
        "define": {
            "timestamps": false,
            "freezeTableName": true
        }
    },
    "production": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASSWORD,
        "database": "milestones_db",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false,
        "define": {
            "timestamps": false,
            "freezeTableName": true
        }
    }
}