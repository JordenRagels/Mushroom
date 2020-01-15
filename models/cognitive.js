module.exports = function(sequelize, DataTypes) {
    var Cognitive = sequelize.define("Cognitive", {
      eyes: DataTypes.BOOLEAN, //follows things with eyes
      bored: DataTypes.BOOLEAN, //begins to get bored
      affection: DataTypes.BOOLEAN, //responds to affection
      coordination: DataTypes.BOOLEAN, //uses hands and eyes together
      mouth: DataTypes.BOOLEAN, //brings things to mouth
      curious: DataTypes.BOOLEAN, //shows curiousity
      dexterity: DataTypes.BOOLEAN, //passes things from hand to hand
      searches: DataTypes.BOOLEAN, //looks for things when hidden
      pinch: DataTypes.BOOLEAN, //picks up things between thumb and finger
      motion: DataTypes.BOOLEAN, //watches the path of moving things
      interaction: DataTypes.BOOLEAN, //watches the path of moving things
      points: DataTypes.BOOLEAN, //pokes and points with index finger
      direction: DataTypes.BOOLEAN, //follows simple directions 
      recognition: DataTypes.BOOLEAN, //looks or points at things or pictures when named
      accuracy: DataTypes.BOOLEAN, //uses items correctly 
      replacement: DataTypes.BOOLEAN, //takes things in and out of containers
      //date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    
    return Cognitive;
  };