"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const fs = require("fs/promises");
const path = require("path");
const svn = require("node-svn-ultimate");

const templateOptions = {
  "supabase-strapi-next":
    "https://github.com/daemonweb/daemon/trunk/starters/supabase-strapi-next"
};

async function checkout(url, destination, log) {
  return new Promise((resolve, reject) => {
    // We use SVN rather than Git so that we can download a subfolder
    // rather than the entire Git tree
    svn.commands.checkout(url, destination, err => {
      if (err) return reject(err);

      // Clean up the .svn file that's created when checking out using SVN
      const svnPath = path.join(destination, ".svn");
      fs.rm(svnPath, { recursive: true });

      log(chalk.green("Successfully installed the app template!"));
      resolve();
    });
  });
}

module.exports = class extends Generator {
  async prompting() {
    this.log(
      yosay(
        `Welcome to the ${chalk.hex("#4B0082").bold("Daemon")} app generator!`
      )
    );

    this.answers = await this.prompt([
      {
        type: "list",
        name: "template",
        message: "Which template would you like to use?",
        choices: Object.keys(templateOptions)
      },
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: ctx => ctx.template
      }
    ]);
  }

  async writing() {
    this.destinationRoot(this.answers.name);
    const template = this.answers.template;
    const templateUrl = templateOptions[template];
    try {
      await checkout(templateUrl, this.destinationRoot(), this.log);
    } catch (err) {
      this.log("There was an error downloading the desired app template");
      this.log(err);
    }
  }
};
