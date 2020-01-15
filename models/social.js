module.exports = function(sequelize, DataTypes) {
    var Social = sequelize.define("Social", {
      smile: DataTypes.BOOLEAN, //smiles at people
      soothe: DataTypes.BOOLEAN, //can self-soothe for short periods
      mimic: DataTypes.BOOLEAN, //copies movement and facial expressions
      familiarity: DataTypes.BOOLEAN, //recognizes people
      empathy: DataTypes.BOOLEAN, //responds to other peoples emotions
      mirror: DataTypes.BOOLEAN, //likes to look at self in mirror
      distinguish: DataTypes.BOOLEAN, //can distinguish between familiar ppl/strangers
      no: DataTypes.BOOLEAN, //understands "No"
      toy: DataTypes.BOOLEAN, //has favorite toys
      noises: DataTypes.BOOLEAN, //repeats sounds and actions to get a specific response
      help: DataTypes.BOOLEAN, //"Helps" with activities like dressing or picking toys
      //date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
    });
    
    return Social;
  };