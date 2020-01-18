module.exports = function(sequelize, DataTypes) {
    var Verbal = sequelize.define("Verbal", {
      coos: DataTypes.INTEGER, //coos and gurgles
      awareness: DataTypes.INTEGER, //turns head toward sounds
      babbles: DataTypes.INTEGER, //Simple babbles
      copySound: DataTypes.INTEGER, //attempts to copy sounds with babbles
      distinctCries: DataTypes.INTEGER, //develops distinct cries depending on needs
      vowels: DataTypes.INTEGER, //strings vowels together while babbling
      nameRes: DataTypes.INTEGER, //responds to name
      consonant: DataTypes.INTEGER, //begins to make consonant sounds
      canCopy: DataTypes.INTEGER, //can copy sounds
      babbleVar: DataTypes.INTEGER, //has a variety of babbles
      words: DataTypes.INTEGER, //speaks simple words
      tone: DataTypes.INTEGER, //sounds change in tones to mimic speech
      //date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    
    return Verbal;
  };