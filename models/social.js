module.exports = function(sequelize, DataTypes) {
    var Social = sequelize.define("Social", {
      smile: DataTypes.INTEGER, //smiles at people
      soothe: DataTypes.INTEGER, //can self-soothe for short periods
      mimic: DataTypes.INTEGER, //copies movement and facial expressions
      familiarity: DataTypes.INTEGER, //recognizes people
      empathy: DataTypes.INTEGER, //responds to other peoples emotions
      mirror: DataTypes.INTEGER, //likes to look at self in mirror
      distinguish: DataTypes.INTEGER, //can distinguish between familiar ppl/strangers
      no: DataTypes.INTEGER, //understands "No"
      toy: DataTypes.INTEGER, //has favorite toys
      noises: DataTypes.INTEGER, //repeats sounds and actions to get a specific response
      help: DataTypes.INTEGER, //"Helps" with activities like dressing or picking toys
      //date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    
    return Social;
  };