# Blueprint

An attempt at building a static file generator I actually like, using [Bun](https://bun.sh/).

## Blocks

BLUE will work by processing `.blue` files, which are UTF-8 encoded text files containing discrete processing blocks delimited by `***` and `---`. There is absolutely nothing fancy about it.

- [INPUT](#input)
- [SETUP](#setup)
- [PART](#part)
- [SWITCH](#switch)
- [OUTPUT](#output)
- [ERROR](#error)
- [FINALLY](#finally)

### INPUT

**INPUT** _(required)_ is the first block to be processed. Arguments specified here will act as global variables for the remainder of the sequence. They can be annotated with basic TypeScript types so BLUE knows what to yell at you when you give it wrong inputs. Comments above or to the right of an argument will be read by BLUE as usage documentation.

```blue
*** INPUT ***
1. NAME: string    # The name of the user
2. AGE: number     # The age of the user
```

### SETUP

**SETUP** _(optional)_ is one of the main reasons for BLUE to exist! It should be able to run any code in any language, and make variables and functions available to the rest of the process. For now, I'll make it able to interpret JavaScript and TypeScript, but I should work on Bash and Nushell support right away too.

```blue
*** SETUP ***
lang: js
...

// This variable will be available to the sequence:
const pets = [ "dog", "cat" ];

// So will this function:
function yell(str) {
  return str.toUpperCase();
}
```

### PART

**PART** _(optional)_

### SWITCH

**SWITCH** _(optional)_

### OUTPUT

**OUTPUT** _(required)_

### ERROR

**ERROR** _(optional)_

### FINALLY

**FINALLY** _(optional)_
