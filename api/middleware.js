let cors=(req, res, next)=> {
    if (req.method === "OPTIONS") {
        if (!req.get('Access-Control-Request-Method')) {
            // this not preflight request, ignore it
            return next();
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Headers", "Range,accept-language,Pragma,If-Modified-Since,Cache-Control,X-Gistack-token,x-gistack-token,X-Gistack-iPlanetDirectoryPro,Authorization,X-Requested-With,Content-Type");
        res.status(200).json({"success": true, "result": true});
    } else {
        res.header('Content-Type', 'application/json')
        res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
        res.header("Access-Control-Allow-Headers", "Range,accept-language,Pragma,If-Modified-Since,Cache-Control,X-Gistack-token,x-gistack-token,X-Gistack-iPlanetDirectoryPro,Authorization,X-Requested-With,Content-Type");
        next();
    }
}

module.exports={
    cors
}