function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested')
}

function deepestChild(){
  return document.getElementById('grand-node').querySelector('div div div div')
}

function increaseRankBy(n){
  var lane = document.querySelectorAll('.ranked-list')
  for (let i = 0, k = lane.length; i < k; i++){
    lane[i].innerHTML = (i + n).toString()
  }
  return document.querySelectorAll('.ranked-list')
}
