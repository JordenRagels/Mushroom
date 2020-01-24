module.exports = function(sequelize, DataTypes) {
    var Cognitive = sequelize.define("Cognitive", {
      eyes: DataTypes.INTEGER, //follows things with eyes
      bored: DataTypes.INTEGER, //begins to get bored
      affection: DataTypes.INTEGER, //responds to affection
      coordination: DataTypes.INTEGER, //uses hands and eyes together
      mouth: DataTypes.INTEGER, //brings things to mouth
      curious: DataTypes.INTEGER, //shows curiousity
      dexterity: DataTypes.INTEGER, //passes things from hand to hand
      searches: DataTypes.INTEGER, //looks for things when hidden
      pinch: DataTypes.INTEGER, //picks up things between thumb and finger
      motion: DataTypes.INTEGER, //watches the path of moving things
      interaction: DataTypes.INTEGER, //watches the path of moving things
      points: DataTypes.INTEGER, //pokes and points with index finger
      direction: DataTypes.INTEGER, //follows simple directions 
      recognition: DataTypes.INTEGER, //looks or points at things or pictures when named
      accuracy: DataTypes.INTEGER, //uses items correctly 
      replacement: DataTypes.INTEGER, //takes things in and out of containers
      //date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    
    return Cognitive;
  };