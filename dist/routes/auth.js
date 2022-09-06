"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const verifyToken_1 = require("../libs/verifyToken");
const auth_controller_1 = require("../controllers/auth.controller");
router.post('/signup', auth_controller_1.signup);
router.post('/signin', auth_controller_1.signin);
router.get('/profile', verifyToken_1.TokenValidation, auth_controller_1.profile);
router.get('/testing', verifyToken_1.TokenValidation, auth_controller_1.testing);
exports.default = router;
//# sourceMappingURL=auth.js.map