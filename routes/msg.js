var express = require("express"),
    router = express.Router();
var msgModel = require("../models/msg");
//显示添加留言的界面
router.get("/add", function (req, res,next) {
  res.render("message-add");
});
//插入留言
router.post("/insert",function (req, res, next) {
  var newMsg = new msgModel(req.body);
  newMsg.save(function(err, msg) {
    if (err) {
      console.log(err);
    }
    res.redirect("/message/add");
  });
});
//显示所有留言
router.get("/list", function (req, res, next) {
  msgModel.findAll(function (err, msgs) {
    if (err) {
      console.log(err);
    }
    console.log(msgs);
    res.render("message-list", {"msgs": msgs});
  });
});
//显示编辑留言界面
router.get("/edit/:id", function (req, res, next) {
  msgModel.findById(req.params.id, function (err, msg) {
    if (err) {
      console.log(err);
    }
    res.render("message-edit", {"msg": msg});
  });
});
//编辑留言入库
router.post("/update", function (req, res, next) {
  msgModel.findById(req.body.id, function (err, msg) {
    if (err) {
      console.log(err);
    }
    msg.content = req.body.content;
    msg.save(function(err) {
      if (err) {
        console.log(err);
      }
      res.redirect("/message/list");
    });
  });
});
//删除留言
router.post("/delete", function (req, res, next) {
  msgModel.remove({_id:req.body.id}, function (err, msg) {
    if (err) {
      console.log(err);
    }
    res.json({success:true});
  });
});
module.exports = router;