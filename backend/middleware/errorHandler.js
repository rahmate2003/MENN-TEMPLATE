// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log error ke console

    // Default error message dan status code
    const statusCode = err.statusCode || 500;
    const message = err.message || "Terjadi kesalahan pada server";

    res.status(statusCode).json({
        success: false,
        message,
        error: process.env.NODE_ENV === "development" ? err.stack : {}, // Hanya tampilkan stack trace di development
    });
};

module.exports = errorHandler;