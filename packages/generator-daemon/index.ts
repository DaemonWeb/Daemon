import Generator from "yeoman-generator";
import chalk from "chalk";
import yosay from "yosay";
import fs from "fs/promises";
import path from "path";
const svn = require("node-svn-ultimate");


export type TemplateOptions = {
  [key: string]: string
}

const templateOptions: TemplateOptions = {
  "supabase-strapi-next":
    "https://github.com/daemontechtools/daemon/trunk/starters/supabase-strapi-next"
};

async function checkout(url:string, destination: string, log: (err:string) => {}) {
  return new Promise<void>((resolve, reject) => {
    // We use SVN rather than Git so that we can download a subfolder
    // rather than the entire Git tree
    svn.commands.checkout(url, destination, (err: string) => {
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

    // @ts-ignore
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
        default: (ctx: any) => ctx.template
      }
    ]);
  }

  async writing() {
    // @ts-ignore
    this.destinationRoot(this.answers.name);
    // @ts-ignore
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
