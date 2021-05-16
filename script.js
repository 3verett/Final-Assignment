var inp = document.getElementById('output')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function addLine (txt) {
  var curText = inp.innerHTML
  inp.innerHTML = curText + txt + "\n"
  inp.scrollTop = inp.scrollHeight;
}

async function addOne (txt) {
  var ms = Math.floor((Math.random() * 200) + 20);
  await sleep(ms)
  var curText = inp.innerHTML
  inp.innerHTML = curText + txt
  inp.scrollTop = inp.scrollHeight;
}

function resetOutput () {
  inp.innerText = ''
  addLine ("\n\n\n\n\n\n\n\n\n\n\n\n")
}

async function printLine(txt) {
  var a = txt.split('')

  for (var i = 0; i < a.length; i++) {
    await addOne (a[i]);
  }
}

resetOutput()
printLine('Thats why yo mamma dead.')
