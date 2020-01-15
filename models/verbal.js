module.exports = function(sequelize, DataTypes) {
    var Verbal = sequelize.define("Verbal", {
      coos: DataTypes.BOOLEAN, //coos and gurgles
      awareness: DataTypes.BOOLEAN, //turns head toward sounds
      babbles: DataTypes.BOOLEAN, //Simple babbles
      copySound: DataTypes.BOOLEAN, //attempts to copy sounds with babbles
      distinctCries: DataTypes.BOOLEAN, //develops distinct cries depending on needs
      vowels: DataTypes.BOOLEAN, //strings vowels together while babbling
      nameRes: DataTypes.BOOLEAN, //responds to name
      consonant: DataTypes.BOOLEAN, //begins to make consonant sounds
      canCopy: DataTypes.BOOLEAN, //can copy sounds
      babbleVar: DataTypes.BOOLEAN, //has a variety of babbles
      words: DataTypes.BOOLEAN, //speaks simple words
      tone: DataTypes.BOOLEAN, //sounds change in tones to mimic speech
      //date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    
    return Verbal;
  };