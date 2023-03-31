import { exit } from "process";
import dotenv from 'dotenv';
dotenv.config();

// remove first two CLI args because they'll be 'ts-node' and 'app.ts' filepaths
const commandLineArgs: string[] = process.argv.slice(2);

if (!commandLineArgs.length) {
    console.log('Please pass a command to do some fun stuff!');
    // exit instead of wrapping remaining code in 'else' block.
    exit;
}

if (commandLineArgs.length === 1 && commandLineArgs[0] === 'version') {
    console.log(process.env.version);
}