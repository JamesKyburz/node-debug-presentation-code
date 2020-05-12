let l = 'initial value'

run()

function run () {
  console.log('l', l)
  debugger
  setTimeout(run, 3000)
}
