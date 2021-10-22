"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
app_1.serverHttp.listen(process.env.PORT || 4000, () => console.log(`🚀 Server is running on port (4000)`));
