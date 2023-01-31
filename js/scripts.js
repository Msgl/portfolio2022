function toggleIcon(icon) {
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
}

$(document).ready(function(){
  $(".filter-button").click(function(){
      var value = $(this).attr('data-filter');
      
      if(value == "all"){
          $('.filter').show('1100');
      }
      else{
          $(".filter").not('.'+value).hide('2800');
          $('.filter').filter('.'+value).show('2800');
          
      }
  });
});