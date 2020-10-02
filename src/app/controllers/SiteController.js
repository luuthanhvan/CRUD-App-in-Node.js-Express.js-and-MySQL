// import model
const siteModel = require('../models/SiteModel');

class SiteController{
    // [GET] /
    index(req, res){
        siteModel.fetch(req.con, function(err, rows) {
            res.render("home", { data: [rows[0].id, rows[0].name, rows[0].category, rows[0].price] });
        });
    }
}

module.exports = new SiteController();