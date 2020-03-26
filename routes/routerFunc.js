module.exports = {
    errFunc: (err, res) => {
        if (err) return res.status(500).send(err)
    }
};
