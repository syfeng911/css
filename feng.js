//啟動 Burger
document.querySelector('.navbar-burger').onclick = function() {
  document.querySelector('.navbar-burger').classList.toggle('is-active');
  document.querySelector('.nav-menu').classList.toggle('is-active');
}

//關閉 Modale
document.querySelectorAll('.modal').forEach(function(e){
    e.querySelectorAll('.delete, .button').forEach(function(a){
      a.onclick = function(){
        e.classList.remove('is-active');
      }
    });
});

//開啟 Modale
document.querySelectorAll('.modal-link').forEach(function(e){
  var target = e.dataset.target;
  e.onclick = function(){
    document.getElementById(target).classList.add('is-active');
  }

});