// import model
const siteModel = require('../models/SiteModel');

class SiteController{
    // [GET] /
    index(req, res){
        siteModel.fetch(req.con, function(err, rows) {
            res.render("home", { title: 'Home page', data: rows });
        });
    }
}

module.exports = new SiteController();