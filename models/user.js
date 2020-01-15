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
      validPassword: function (password) {
        return bcrypt.compareSync(password, this.password);
      }
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Cognitive, {
      onDelete: "cascade"
    });
    User.hasMany(models.Motor, {
      onDelete: "cascade"
    });
    User.hasMany(models.Social, {
      onDelete: "cascade"
    });
    User.hasMany(models.Verbal, {
      onDelete: "cascade"
    });
  };


  return User;
};

