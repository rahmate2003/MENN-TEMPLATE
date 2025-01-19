const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const setupGlobalMiddleware = (app) => {
   
    app.use(morgan("dev"));

   
    app.use(express.json()); 
    app.use(express.urlencoded({ extended: true }));

    // Middleware untuk CORS
    app.use(
        cors({
            origin: process.env.CLIENT_URL || "http://localhost:3001", 
            credentials: true,  
            methods: ["GET", "POST", "PUT", "DELETE"],
        })
    );

    
    app.use((req, res, next) => {
        const allowedMethods = ["GET", "POST", "PUT", "DELETE"];
        if (!allowedMethods.includes(req.method)) {
            return res.status(405).json({ message: "Method Not Allowed" });
        }
        next();
    });
};

module.exports = setupGlobalMiddleware;