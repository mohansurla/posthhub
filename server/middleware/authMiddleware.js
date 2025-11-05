import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    try{
        //extracting token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Authorization header missing or malformed" });
        }

        //extracting the token
        const token = authHeader.split(" ")[1];

        //verifying the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded; // attaching decoded token data to request object

        next(); //proceeding to the next middleware or route handler
    }

    catch (error) {
        console.error("Auth Middleware Error:", error.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}