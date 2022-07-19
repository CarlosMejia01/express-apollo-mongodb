const { connect } = require("mongoose");

const connectDB = async () => {
  try {
    await connect("mongodb://localhost/taskdb");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { connectDB };
