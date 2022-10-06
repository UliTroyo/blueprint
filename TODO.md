# Blueprint features to work on

- Allow passing a directory to recursively search for `.blue` files
- Parse a `.blue` file into discrete blocks: INPUT, SETUP, PART, SWITCH, OUTPUT, and FINALLY
- Make an object containing all variables specified in the `.blue` file
- Create a sequence of steps based on the given blocks, which on failure should output the contents of the ERROR block and show the line and file where the failure occurred
- BLUE should run sequentially when invoked, but a `--serve` flag should start a server that accepts requests for files in the `build/` directory (with a cute 404 and favicon for this purpose)
- BLUE will require no config, but will accept a `config.blue` or something to specify delimiters and other such options
- When run on a single file, the CLI will stop on insufficient args and ask for input
- When passed a `--dir` flag followed by a directory, BLUE will recursively look for `.blue` files within and process each in turn
