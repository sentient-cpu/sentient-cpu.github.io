a = false;
function show_menu(){
    if(a==false){
     var lis = document.getElementsByClassName('menu_option');
     for(var i =0;i<lis.length;i++){
               lis[i].style.display = 'block';
       }
      a = true;
    }
    else{
        var lis = document.getElementsByClassName('menu_option');
        for(var i =0;i<lis.length;i++){
                  lis[i].style.display = 'none';
          }
      a = false;
    }
}

function reset_dis(){
    console.log(window.innerWidth);
    if(window.innerWidth > 800){
        var lis = document.getElementsByClassName('menu_option');
     for(var i =0;i<lis.length;i++){
               lis[i].style.display = 'block';
       }

    }
}