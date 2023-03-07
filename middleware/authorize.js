import Jwt from "jsonwebtoken";

const authorize = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token)
    {
        res.status(401).json({msg:"Not Authorized"});
    }

    try {
        // verify if user is connected before exec request
        const decoded = Jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;

        next();

    } catch (error) {
        console.error(error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
}

export default authorize;