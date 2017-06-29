// 0) Here is how you'd create a promise, try getting to the `then` instead of
// the `catch` that it's getting to now.

new Promise((resolve, reject) => {
  reject(new Error('Rejecting a promsie skips to the next `catch` block!'))
  // accept('Why are pirates pirates? cuz they arrrrrr')
}).then((message) => {
  console.log('success', message)
}).catch((e) => {
  console.log('error', e.message)
})
