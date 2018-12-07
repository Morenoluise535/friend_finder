var path = require("path");


module.exports = function(app) {

    app.get("/servay", function(req, res) {
      res.sendFile(path.join(__dirname, "../piblic/survay.html"));
    });
  
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
  };