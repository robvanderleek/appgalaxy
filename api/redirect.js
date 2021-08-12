module.exports = (req, res) => {
    res.redirect(308, 'https://' + req.query.path);
};