  $(function() {
    var link = $('.m-menu-link');
    var close = $('.close-menu');
    var menu = $('.m-menu');
      link.on('click', function(event) {
      event.preventDefault();
      menu.toggleClass('m-menu__active');
    });
      close.on('click', function(event) {
      event.preventDefault();
      menu.toggleClass('m-menu__active');
    });
  });

  var button1 = document.querySelectorAll('.phone__btn')
  var button2 = document.querySelectorAll('.button-standart');
  var modal = document.querySelector('#modal');
  var close = document.querySelector('#close');
  var close2 = document.querySelector('.modal-dialog__span')

  // console.log(button1);
  // console.log(button2);
  
/*так как querySelectorAll это коллекция элементов 
addEvenListener не работает без обертки*/
  
  button1.forEach((el,i,arr)=>{
  el.addEventListener('click', function() {
    modal.classList.add('modal_active')
  })
});  

  button2.forEach((el,i,arr)=>{
  el.addEventListener('click', function() {
    modal.classList.add('modal_active')
  })
});

/*так как querySelector отдельный элемент то addEventListener работает
без обертки*/

  close.addEventListener('click', function() {
    modal.classList.remove('modal_active')
  });

  close2.addEventListener('click', function() {
    modal.classList.remove('modal_active')
  });

// var products = document.querySelector('.section-2__allproducts')
// var features = document.querySelector('.section-3__allfeatures')
// var product = document.querySelector('.popular-product')
// var technics = document.querySelector('.technics')



