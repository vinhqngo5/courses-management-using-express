const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/learning-nodejs-express-dev",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      }
    );
    console.log("Connect successfully");
  } catch (e) {
    console.log("Connect fail");
  }
}
// Can use obj wrap for export more functions
module.exports = { connect };
