"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.signin = exports.signup = void 0;
const User_1 = __importDefault(require("../models/User"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // user
        const user = new User_1.default({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        user.password = yield user.encryptPassword(user.password);
        const savedUser = yield user.save();
        // token
        const token = jsonwebtoken_1.default.sign({ _id: savedUser._id }, process.env.TOKEN_SECRET || 'tokentest');
        res.header('auth-token', token).json(savedUser);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validate user by email
        const user = yield User_1.default.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).json("Email or password is wrong");
        // validate password
        const correctPassword = yield user.validatePassword(req.body.password);
        if (!correctPassword)
            return res.status(400).json("Invalid password");
        // generate token
        const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET || 'tokentest', {
            expiresIn: 60 * 60 * 24 // se expresa en segundo, el resultado equivale a 1 dia
        });
        res.header('auth-token', token).json(user);
    }
    catch (error) {
        res.status(400).json(error.message);
    }
});
exports.signin = signin;
const profile = (req, res) => {
    res.send('profile');
};
exports.profile = profile;
//# sourceMappingURL=auth.controller.js.map