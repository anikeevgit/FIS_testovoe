let $secName = document.querySelector('#secName')
let $firstName = document.querySelector('#firstName')
let $otcestvo = document.querySelector('#otcestvo')
let $phone = document.querySelector('#phone')
let $otherPhone = document.querySelector('#otherPhone')
let $mail = document.querySelector('#mail')
let $seria = document.querySelector('#seria')
let $nomer = document.querySelector('#nomer')
let $calendar = document.querySelector('#calendar')
let $codPod = document.querySelector('#codPod')
let $region = document.querySelector('#region')
let $reg = document.querySelector('#reg')
let $org = document.querySelector('#org')
let $inn = document.querySelector('#inn')
let $dolj = document.querySelector('#dolj')
let $zp = document.querySelector('#zp')
let $DNRcalendar = document.querySelector('#DNRcalendar')
let $vid = document.querySelector('#vid')
let $cel = document.querySelector('#cel')
let $sum = document.querySelector('#sum')
let $razmer = document.querySelector('#razmer')
let $srok = document.querySelector('#srok')
let $sumDop = document.querySelector('#sumDop')

let $run = document.querySelector('.run')
$run.addEventListener('click', () => {
  let summa = +sum.value
  let pc = +razmer.value / 12 / 100
  let pp = +srok.value
  let a = Math.pow(1 + pc, -pp)
  let b = +a.toFixed(3)
  let c = 0
  let ejPl = 0
  let dif = 0
  let persent = 0
  let remainSumma = summa
  let mainDef = +(summa / pp).toFixed(2)
  function ann() {
    for (let i = 1; i < pp + 1; i++) {
      persent = +(remainSumma * pc).toFixed(2)
      c = summa * (pc / (1 - b))
      ejPl = +c.toFixed(2)
      remainSumma -= +mainDef.toFixed(2)
      let rS = +remainSumma.toFixed(1)
      dif = persent + mainDef
      console.log(
        'Месяц: ' + i,
        'Ежемесячный платеж: ' + ejPl,
        'Основной долг:' + mainDef,
        'Долг по процентам: ' + persent,
        'Долг: ' + rS
      )
    }
  }
  ann()
})

document.getElementById('example').onclick = function (event) {
  event = event || window.event
  var target = event.target || event.srcElement
  if (target.tagName == 'TD') {
    sumDop.value = +target.innerHTML + +sum.value
    console.log(+target.innerHTML)
  }
}
