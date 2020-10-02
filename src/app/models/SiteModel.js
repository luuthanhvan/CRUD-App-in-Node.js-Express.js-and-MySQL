class SiteModel{
    fetch(con, callback) {
        con.query("SELECT * FROM Product", callback)
    }
}

module.exports = new SiteModel();