import jwt, {} from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();
export const auth = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const jwtSecretKey = process.env.jwt_secret_key;
    console.log("process.env.jwt_secret_key", jwtSecretKey);
    try {
        const token = authHeader?.split(" ")[1];
        if (token) {
            const user = jwt.verify(token, jwtSecretKey);
            req.userId = user.userId;
            next();
        }
    }
    catch (err) {
        res.status(500).json({
            message: err
        });
    }
};
//# sourceMappingURL=auth.js.map