class SiteController{
    // [GET] /
    index(req, res){
        res.render('home', {title: 'Home page'});
    }
}

module.exports = new SiteController();