document.querySelectorAll('.modal').forEach(function(e){
    e.querySelectorAll('.delete, .button').forEach(function(a){
      a.onclick = function(){
        e.classList.remove('is-active');
      }
    });
});

document.querySelectorAll('.modal-link').forEach(function(e){
  var target = e.dataset.target;
  e.onclick = function(){
    document.getElementById(target).classList.add('is-active');
  }

})