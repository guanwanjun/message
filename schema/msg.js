var mongoose = require("mongoose");


var msgSchema = mongoose.Schema({
  content: String,
  createAt: {
    type: Date,
    default: Date.now()
  }
});
msgSchema.statics = {
  findAll: function(cb) {
    return this
      .find({})
      .sort("createAt")
      .exec(cb);
  },
  findById: function(id, cb) {
    return this
      .findOne({_id:id}, cb);
  }
};
module.exports = msgSchema;