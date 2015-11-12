$(function () {
  "use strict";
  //删除留言
  $(".js-del").on("click", function() {
    var $this = $(this);
    $.ajax({
      url: "/message/delete",
      type: "POST",
      dataType: "json",
      data: {id: $this.data("id")}
    }).done(function (data) {
      if (data && data.success === true) {
        $this.parent().parent().remove();
      } else {
        alert("fail!");
      }
    });
  });
});