require('sandbox-debugger')

exports.handler = async ({ body }) => {
  debugger
  return {
    body
  }
}
