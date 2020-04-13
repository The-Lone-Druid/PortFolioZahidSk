$.fn.toggleAttrVal = function(attr, val1, val2) {
    var test = $(this).attr(attr);
    if ( test === val1) {
      $(this).attr(attr, val2);
      return this;
    }
    if ( test === val2) {
      $(this).attr(attr, val1);
      return this;
    }
    // default to val1 if neither
    $(this).attr(attr, val1);
    return this;
  };

  $.fn.toggleAttr = function(attr, attr1, attr2) {
    return this.each(function() {
      var self = $(this);
      if (self.attr(attr) == attr1)
        self.attr(attr, attr2);
      else
        self.attr(attr, attr1);
    });
  };


$('#change-theme-light').click(function() {

    $('#styleSheetTheme').toggleAttr('href', "dist/css/light.css");

    document.getElementById("change-theme-light").style.display = "none";
    document.getElementById("change-theme-dark").style.display="block";

    localStorage.setItem("light-theme-enabled",true);
    console.log("set to true");
});

$('#change-theme-dark').click(function() {

    $('#styleSheetTheme').toggleAttr('href', "dist/css/dark.css");

    document.getElementById("change-theme-light").style.display = "block";
    document.getElementById("change-theme-dark").style.display="none";
    
    localStorage.setItem("light-theme-enabled",false);
    console.log("set to false");
});


if(JSON.parse(localStorage.getItem("light-theme-enabled"))) {
    $("#styleSheetTheme").toggleAttr("href","dist/css/light.css");
}
else {
    $("#styleSheetTheme").toggleAttr("href","dist/css/dark.css");
}
