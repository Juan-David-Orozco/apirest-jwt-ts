"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
mongoose_1.default.connect(config_1.MONGODB_URI)
    .then(db => console.log(`DB is conected: ${db.connection.name}`))
    .catch(err => console.log(err));
//# sourceMappingURL=database.js.map