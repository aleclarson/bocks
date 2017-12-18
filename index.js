
const top = {left: '╭─', right: '─╮\n'}
const mid = {left: '│ ', right: ' │\n'}
const bot = {left: '╰─', right: '─╯'}

function bocks(input) {
  const clean = input.replace(ansiRegex(), '')
  const above = new Array(clean.length + 1).join('─')
  const below = above
  return [
    top.left, above, top.right,
    mid.left, input, mid.right,
    bot.left, below, bot.right,
  ].join('')
}

bocks.RE = /([╭─╮│╰─╯]+)/g

module.exports = bocks

// Stolen from https://www.npmjs.com/package/ansi-regex
function ansiRegex() {
	const pattern = [
		'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
		'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))'
	].join('|')
	return new RegExp(pattern, 'g')
}
