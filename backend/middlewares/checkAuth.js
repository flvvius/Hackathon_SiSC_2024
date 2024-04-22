
const controller = {
    checkAuth: async (req, res, next) => {
        const authToken = req.cookies['authToken'];

        if (authToken) {
            next();
        } else {
            res.status(401).send('No valid token provided');
        }
    }
}

module.exports = controller;