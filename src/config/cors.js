module.exports = function (req, res, next) {
    res.header('Access-Control_Allow-Origin', '*')
    res.header('Access-Control_Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}