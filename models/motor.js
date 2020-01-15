module.exports = function(sequelize, DataTypes) {
    var Motor = sequelize.define("Motor", {
      head: DataTypes.BOOLEAN, //holds head unsupported
      roll: DataTypes.BOOLEAN, //can roll from tummy to back
      elbows: DataTypes.BOOLEAN, //pushes onto elbows while on tummy
      rollOver: DataTypes.BOOLEAN, //can roll from back to tummy and tummy to back
      mouth: DataTypes.BOOLEAN, //brings things to mouth
      sit: DataTypes.BOOLEAN, //can sit without support
      standing: DataTypes.BOOLEAN, //standing with assistance
      crawling: DataTypes.BOOLEAN, //hands and knees crawling
      walkAssist: DataTypes.BOOLEAN, //walking with assistance
      standUnassist: DataTypes.BOOLEAN, //standing without assistance 
      walkUnassist: DataTypes.BOOLEAN, //walking without assistance
      //date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    
    return Motor;
  };