const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controllers/authController");
const jwt = require("jsonwebtoken");

// Route untuk memulai proses login dengan Google
router.get("/google", (req, res, next) => {
    const state = Math.random().toString(36).substring(7);
    req.session.state = state; // Simpan state di session
    passport.authenticate("google", { scope: ["profile", "email"], state: state })(req, res, next);
});

// Callback route setelah login dengan Google
router.get("/google/callback", (req, res, next) => {
    // Periksa state parameter untuk mencegah CSRF
    if (req.query.state !== req.session.state) {
        return res.status(400).json({ message: "Invalid state parameter" });
    }

    // Hapus state dari session setelah pengecekan
    delete req.session.state;

    // Proses autentikasi dengan Google
    passport.authenticate("google", { failureRedirect: "/login", session: false }, (err, user, info) => {
        if (err) {
            return res.status(500).json({ message: "Terjadi kesalahan saat autentikasi", error: err.message });
        }
        if (!user) {
            return res.status(401).json({ message: "Autentikasi gagal", info });
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Kembalikan token sebagai respons JSON (untuk testing backend saja)
        // res.status(200).json({ message: "Login berhasil", token, user });

        // Jika ingin redirect ke frontend, gunakan kode berikut:
        res.redirect(`${process.env.CLIENT_URL}/login/success?token=${token}`);
    })(req, res, next);
});

// Route untuk registrasi user
router.post("/register", authController.registerUser);

// Route untuk login user
router.post("/login", authController.loginUser);

module.exports = router;