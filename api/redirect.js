module.exports = (req, res) => {
    res.redirect(308, req.query.path);
};