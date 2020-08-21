a = false;
b = false;
function show_menu(){
    if(a==false){
     var lis = document.getElementsByClassName('menu_option');
     for(var i =0;i<lis.length;i++){
               lis[i].style.display = 'block';
       }
      document.getElementById('menu').src = 'menu2.png';
      a = true;
    }
    else{
        var lis = document.getElementsByClassName('menu_option');
        for(var i =0;i<lis.length;i++){
                  lis[i].style.display = 'none';
          }
      document.getElementById('menu').src = 'menu.webp';
      a = false;
    }
}

function reset_dis(){
    if(window.innerWidth > 800){
        var lis = document.getElementsByClassName('menu_option');
     for(var i =0;i<lis.length;i++){
               lis[i].style.display = 'block';
       }

       var ele = document.getElementsByTagName('body');
       ele[0].style.overflow = 'auto';

    }
}

function disable_scroll(){
    console.log('disable_scroll func. is called.')
   if(!b){
       var ele = document.getElementsByTagName('body');
       ele[0].style.overflow = 'hidden';
       b=true;
        }
     else{
        var ele = document.getElementsByTagName('body');
        ele[0].style.overflow = 'auto';
         b=false;
     }
    
}