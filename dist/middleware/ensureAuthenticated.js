"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
function ensureAuthenticated(request, response, next) {
    const authToken = request.headers.authorization;
    if (!authToken) {
        return response.status(401).json({
            errorCode: "token.invalid",
        });
    }
    // Bearer q573890e9qe7gqh89
    const [, token] = authToken.split(" ");
    try {
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        request.user_id = sub;
        return next();
    }
    catch (error) {
        return response.status(401).json({ errorCode: "token.expired" });
    }
}
exports.ensureAuthenticated = ensureAuthenticated;
