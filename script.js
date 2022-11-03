"use strict";

// <i class="bi bi-x-lg"></i>

// classList.add('') => classlar ro'yhatiga qo'shadi.
// classList.remove('') => classlar ro'yhatiga o'chiradi.
// classList.contains('') => classlar ro'yhatidan tekshiradi bor bo'lsa true / false
// classList.toggle('d-none');  lasslar ro'yhatidan tekshiradi yoq bolsa qoshadi bosa olib tashlaydi
let card=$("#card");
// console.log(card.id);
console.log(card.classList);

console.log(card.classList.add('text-warning','p-5'));




$(".btn-success").addEventListener("click",(evt)=>{
   $('.card').classList.add('text-danger','text-center','bg-success','bg-opacity-50','fw-bold')
});


$(".btn-danger").addEventListener("click",(evt)=>{
   $('.card').classList.remove('text-center','text-danger')
})


$(".btn-info").addEventListener("click",(evt)=>{
   // console.log($('.card').classList.contains('card3'));
   $('.card').classList.add('d-none');

   
})

$(".btn-primary").addEventListener("click",(evt)=>{
   $('.card').classList.toggle('d-none');
   
})


$(".btn-warning").addEventListener("click",(evt)=>{
   $('.card').classList.toggle('swipe');

   if($('.card').classList.contains('swipe')){
      $(".btn-warning").innerHTML =`<i class="bi bi-list"></i>`;
      }
   else{ 
      $(".btn-warning").innerHTML =` <i class="bi bi-x-lg"></i>`;
   };

   
   
});


// ==================================slide=============
let i=0;
function slider() {
   if(i>$$('.slide-item').length-1){
      i=0;
      
   }

   if(i<0){
      i=$$('.slide-item').length-1;
      
   }

   $(".slide-list").style.transform=`translateX(${-i*700}px)`;

}





$(".next").addEventListener("click",()=>{
   i++;
   slider();

})




$(".prev").addEventListener("click",()=>{
   i--;
   slider();
   

})

setInterval(()=>{
   i++
   slider()
},1000)















