const mongoose = require("mongoose");

const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.6xjqzlg.mongodb.net/?appName=Cluster0`,
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = main;
