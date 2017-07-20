function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function deepestChild() {
  return document.getElementById('grand-node').querySelector('div div div div div')
}


function increaseRankBy(n) {
  let lis =
  document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    let int = parseInt(lis[i].innerHTML)
    int += n
    lis[i].innerHTML = int
  }
}
