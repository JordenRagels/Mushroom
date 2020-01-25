var bcrypt = require("bcrypt-nodejs");
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    googleId: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    instanceMethods: {
    }
  });
  User.prototype.validPassword = function (password, securePassword) {
    return bcrypt.compareSync(password, securePassword);
  }
  User.associate = function (models) {
    User.hasMany(models.Photo, {
      onDelete: "cascade"
    });
  };
  return User;
};