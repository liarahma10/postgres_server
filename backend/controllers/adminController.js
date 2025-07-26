const db = require("../models/db");
const jwt = require("jsonwebtoken");
// Tambahkan bcrypt karena Anda menggunakannya untuk hashing
const bcrypt = require("bcrypt"); // <-- Pastikan ini ada di file ini

exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log("Email dari body:", email);

    try {
        const result = await db.query("SELECT * FROM admins WHERE email = $1", [
            email,
        ]);
        const admin = result.rows[0];

        if (!admin) {
            return res.status(401).json({ error: "Email tidak ditemukan" });
        }

        // --- INI BAGIAN YANG PERLU DIUBAH ---
        // Bandingkan password yang dikirim pengguna dengan password_hash di database menggunakan bcrypt.compare
        const isPasswordValid = await bcrypt.compare(password, admin.password);

        if (!isPasswordValid) { // Jika password tidak cocok
            return res.status(401).json({ error: "Password salah" });
        }
        // --- AKHIR BAGIAN YANG DIUBAH ---

        const token = jwt.sign(
            { id: admin.id, email: admin.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({ token });
    } catch (error) {
        console.error("Login error:", error.message);
        res.status(500).json({ error: "Gagal login admin" });
    }
};
