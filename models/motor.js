module.exports = function(sequelize, DataTypes) {
    var Motor = sequelize.define("Motor", {
      head: DataTypes.INTEGER, //holds head unsupported
      roll: DataTypes.INTEGER, //can roll from tummy to back
      elbows: DataTypes.INTEGER, //pushes onto elbows while on tummy
      rollOver: DataTypes.INTEGER, //can roll from back to tummy and tummy to back
      mouth: DataTypes.INTEGER, //brings things to mouth
      sit: DataTypes.INTEGER, //can sit without support
      standing: DataTypes.INTEGER, //standing with assistance
      crawling: DataTypes.INTEGER, //hands and knees crawling
      walkAssist: DataTypes.INTEGER, //walking with assistance
      standUnassist: DataTypes.INTEGER, //standing without assistance 
      walkUnassist: DataTypes.INTEGER, //walking without assistance
      //date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    
    return Motor;
  };