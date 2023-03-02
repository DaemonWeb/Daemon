"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yeoman_generator_1 = __importDefault(require("yeoman-generator"));
const chalk_1 = __importDefault(require("chalk"));
const yosay_1 = __importDefault(require("yosay"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const svn = require("node-svn-ultimate");
const templateOptions = {
    "supabase-strapi-next": "https://github.com/daemonweb/daemon/trunk/starters/supabase-strapi-next"
};
function checkout(url, destination, log) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            // We use SVN rather than Git so that we can download a subfolder
            // rather than the entire Git tree
            svn.commands.checkout(url, destination, (err) => {
                if (err)
                    return reject(err);
                // Clean up the .svn file that's created when checking out using SVN
                const svnPath = path_1.default.join(destination, ".svn");
                promises_1.default.rm(svnPath, { recursive: true });
                log(chalk_1.default.green("Successfully installed the app template!"));
                resolve();
            });
        });
    });
}
module.exports = class extends yeoman_generator_1.default {
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log((0, yosay_1.default)(`Welcome to the ${chalk_1.default.hex("#4B0082").bold("Daemon")} app generator!`));
            // @ts-ignore
            this.answers = yield this.prompt([
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
                    default: (ctx) => ctx.template
                }
            ]);
        });
    }
    writing() {
        return __awaiter(this, void 0, void 0, function* () {
            // @ts-ignore
            this.destinationRoot(this.answers.name);
            // @ts-ignore
            const template = this.answers.template;
            const templateUrl = templateOptions[template];
            try {
                yield checkout(templateUrl, this.destinationRoot(), this.log);
            }
            catch (err) {
                this.log("There was an error downloading the desired app template");
                this.log(err);
            }
        });
    }
};
