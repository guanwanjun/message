var mongoose = require("mongoose"),
    msgSchema = require("../schema/msg"),
    msgModel = mongoose.model("messages", msgSchema);

module.exports = msgModel;