
# bocks v0.0.1

Tiny version of [cli-boxes](https://www.npmjs.com/package/cli-boxes) (only the rounded box).

Currently, this library has zero configuration.™ Pass a string, get it wrapped in a rounded box (with 1 space of horizontal padding). As minimal as it gets. **Zero dependencies!**

Just **470 bytes** with gzip! It could be smaller, but the code is cute and ANSI support adds a few pounds.

```js
const bocks = require('bocks')

console.log(bocks('hello world'))
// ╭─────────────╮
// │ hello world │
// ╰─────────────╯
```

**NOTE:** Multi-line boxes are not yet supported! (PRs accepted)

### ANSI coloring

Painting the box with your favorite ANSI color library is **easy!** Try it with [chalk](https://www.npmjs.com/package/chalk).

```js
const chalk = require('chalk')

let str = bocks(chalk.blue('hello world'))
str = str.replace(bocks.RE, chalk.red('$1'))

// See a beautiful red box with blue text! 😍
console.log(str)
```
