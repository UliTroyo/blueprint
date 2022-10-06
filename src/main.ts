import { argv } from "process";
import { mkdirSync, existsSync } from "fs";
import { resolve, format, parse } from "path";

// Check if BLUE received any args
const mayContainBlue = argv.length > 2 && argv.slice(2, argv.length);

if (mayContainBlue) {
  try {
    // Retrieve only .blue files from the args array
    const blueFiles = mayContainBlue
      .map(function doesItParse(maybeFile) {
        return parse(maybeFile);
      })
      .filter(function isItBlue(file) {
        return file.ext == ".blue";
      });
    const buildDir = resolve("build");

    if (!existsSync(buildDir)) {
      mkdirSync(buildDir);
    }

    // Only outputs to a build/ dir inside the current dir
    for (const file of blueFiles) {
      await Bun.write(
        `build/${file.base}.html`,
        Bun.file(format({ dir: file.dir, name: file.name }))
      );
    }
  } catch (err) {
    console.error(err.message);
  }
} else {
  console.error("Sorry homie, give me some .blue files if you want my help!");
}
