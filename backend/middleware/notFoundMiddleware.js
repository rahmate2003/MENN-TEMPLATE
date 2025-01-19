// middleware/notFoundMiddleware.js
const notFoundMiddleware = (req, res, next) => {
    res.status(404).json({ message: "Route tidak ditemukan" });
};

module.exports = notFoundMiddleware;