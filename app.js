module.exports = (req, res) => {
    res.statusCode = 200;
    const data = JSON.stringify({
        message: "Hello world",
        status: 200
    })
    res.end(data)
};