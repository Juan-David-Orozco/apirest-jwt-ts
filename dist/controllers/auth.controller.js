"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.signin = exports.signup = void 0;
const signup = (req, res) => {
    res.send('signup');
};
exports.signup = signup;
const signin = (req, res) => {
    res.send('signin');
};
exports.signin = signin;
const profile = (req, res) => {
    res.send('profile');
};
exports.profile = profile;
//# sourceMappingURL=auth.controller.js.map