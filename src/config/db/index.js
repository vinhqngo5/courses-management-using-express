const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.fveqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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
