const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(401).json({ error: "Token tidak disertakan" });
	}

	const token = authHeader.split(" ")[1];

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.admin = decoded;
		next();
	} catch (error) {
		return res.status(401).json({ error: "Token tidak valid" });
	}
};
