const assert = require('assert')
const randomAccountPassword = require('./')

const seen = new Set()

for (let i = 0; i < 32768; i++) {
  const password = randomAccountPassword()

  assert.strictEqual(/[a-z]/.test(password), true)
  assert.strictEqual(/[A-Z]/.test(password), true)
  assert.strictEqual(/[0-9]/.test(password), true)
  assert.strictEqual(/([0-9a-zA-Z]{3}-){3}[0-9a-zA-Z]{3}/.test(password), true)
  assert.strictEqual(seen.has(password), false)

  seen.add(password)
}
