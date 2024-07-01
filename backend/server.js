const app = require("./app");
const connectDatabase = require("./config/db")
const dotenv = require("dotenv");
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})