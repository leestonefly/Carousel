$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
$('.images > img:nth-child(4)').addClass('enter')
let n = 1
setInterval(()=>{
  $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
    .one('transitionend', (e)=>{
      $(e.currentTarget).removeClass('leave').addClass('enter')
    })
  $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
  n += 1
},3000)


function x(n){
  if(n>4){
    n = n%4
    if (n===0){
      n =4
    }
  } 
  return n
}

// let n
// 初始化()
// setInterval(()=>{
//   makeLeave(getImage(n))
//     .one('transitionend', (e)=>{
//       makeEnter($(e.currentTarget))
//     })
//   makeCurrent(getImage(n+1))
//   n += 1
// },3000)

// function getImage(n){
//   return $(`.images > img:nth-child(${x(n)})`)
// }

// function x(n){
//   if(n>4){
//     n = n%4
//     if (n===0){
//       n =4
//     }
//   } // n = 1 2 3 4
//   return n
// }

// function 初始化(){
//   n = 1
//   $(`.images > img:nth-child(${n})`).addClass('current')
//     .siblings().addClass('enter')
// }

// function makeCurrent($node){
//   return $node.removeClass('enter leave').addClass('current')
// }
// function makeLeave($node){
//   return $node.removeClass('enter current').addClass('leave')
// }
// function makeEnter($node){
//   return $node.removeClass('leave current').addClass('enter')
// }

