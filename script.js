    
        
    var btn = document.querySelectorAll('.btnNums');
    var del = document.querySelector('.del');
    var reset = document.querySelector('.reset');
    var textBox = document.getElementById('text-box');
    var equal = document.getElementById('equal');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');

    var body = document.querySelector('body');
    var mainCalc = document.getElementById('mainCalc');
    var bar = document.getElementById('bar');
    var toggler = document.getElementById('bar-toggle');
    var btnCont = document.querySelector('.btns-cont');
    var btnNums = document.querySelectorAll('.btnNums');




    for(let i = 0; i< btn.length; i++){
        btn[i].addEventListener('click', ()=> {
       
        if(btn[i] == btn[14]){
           textBox.value += "*";
        }else{
            textBox.value += btn[i].textContent;
          
        }
      })
    }

    del.addEventListener('click', () => {
      var screendisplay = textBox.value;
      textBox.value = screendisplay.substr(0, screendisplay.length-1);
    })

    reset.addEventListener('click', ()=> {
      textBox.value =" ";
    })

    //  EQUAL TO ( END RESULT)

    equal.addEventListener('click', () => {

      textBox.value = eval(textBox.value);
    })


    one.addEventListener('click', () => {
      for(i=0; i< btn.length; i++){
        btn[i].style.color = 'hsl(221, 14%, 31%)';
        btn[i].style.backgroundColor = 'hsl(30, 25%, 89%)';
        btn[i].style.boxShadow = ' 0 4px 0 hsl(28, 16%, 65%)';
      }
      body.style.backgroundColor = 'hsl(222, 26%, 31%)';
      mainCalc.style.color = 'white';
      textBox.style.backgroundColor = 'hsl(224, 36%, 15%)';
      textBox.style.color = 'white';
      bar.style.backgroundColor = 'hsl(223, 31%, 20%)';
      toggler.style.backgroundColor = 'hsl(6, 63%, 50%)';
      toggler.style.marginLeft = '0';
      toggler.style.transition = '.5s ease';
      btnCont.style.backgroundColor = 'hsl(223, 31%, 20%)'; 
      del.style.backgroundColor = 'hsl(225, 21%, 49%)';
      del.style.boxShadow = '0 5px 0 hsl(224, 28%, 35%)';
      reset.style.backgroundColor = 'hsl(225, 21%, 49%)';
      reset.style.boxShadow = '0 5px 0 hsl(224, 28%, 35%)';

      equal.style.backgroundColor = 'hsl(6, 63%, 50%)';
      equal.style.boxShadow = ' 0 4px 0 hsl(6, 70%, 34%)';
      equal.style.color = 'white';
      // btn.style.backgroundColor = ''
    });

    two.addEventListener('click', () => {
      for(i=0; i< btn.length; i++){
        btn[i].style.color = 'hsl(221, 14%, 31%)';
        btn[i].style.backgroundColor = 'hsl(45, 7%, 89%)';
        btn[i].style.boxShadow = ' 0 4px 0 hsl(35, 11%, 61%)';
      }
      body.style.backgroundColor = 'hsl(0, 0%, 90%)';
      mainCalc.style.color = 'hsl(221, 14%, 31%)';
      textBox.style.backgroundColor = 'hsl(0, 0%, 93%)';
      textBox.style.color = 'hsl(221, 14%, 31%)';
      bar.style.backgroundColor = 'hsl(0, 5%, 81%)';
      toggler.style.backgroundColor = 'hsl(6, 63%, 50%)';
      toggler.style.marginLeft = '36%';
      toggler.style.transition = '.5s ease';
      btnCont.style.backgroundColor = 'hsl(0, 5%, 81%)';
      del.style.backgroundColor = 'hsl(185, 42%, 37%)';
      del.style.boxShadow = '0 4px 0 hsl(185, 58%, 25%)';
      reset.style.backgroundColor = 'hsl(185, 42%, 37%)';
      reset.style.boxShadow = '0 4px 0 hsl(185, 58%, 25%)';

      equal.style.backgroundColor = 'hsl(25, 98%, 40%)';
      equal.style.boxShadow = '0 4px 0 hsl(25, 99%, 27%)';
      // btn.style.backgroundColor = ''
    });

    three.addEventListener('click', () => {
      for(i=0; i< btn.length; i++){
        btn[i].style.backgroundColor = 'hsl(268, 47%, 21%)';
        btn[i].style.color = 'hsl(52, 100%, 62%)';
        btn[i].style.boxShadow = ' 0 4px 0 hsl(290, 70%, 36%)';
      }
      body.style.backgroundColor = 'hsl(268, 75%, 9%)';
      mainCalc.style.color = 'hsl(52, 100%, 62%)';
      textBox.style.backgroundColor = 'hsl(268, 71%, 12%)';
      textBox.style.color = 'hsl(52, 100%, 62%)';
      bar.style.backgroundColor = 'hsl(268, 71%, 12%)';
      toggler.style.backgroundColor = 'hsl(176, 100%, 44%)';
      toggler.style.marginLeft = '75%';
      toggler.style.transition = '.5s ease';
      btnCont.style.backgroundColor = 'hsl(268, 71%, 12%)';
      
      del.style.backgroundColor = 'hsl(281, 89%, 26%)';
      del.style.boxShadow = '0 4px 0 hsl(285, 91%, 52%)';
      reset.style.backgroundColor = 'hsl(281, 89%, 26%)';
      reset.style.boxShadow = '0 4px 0 hsl(285, 91%, 52%)';

      equal.style.backgroundColor = 'hsl(176, 100%, 44%)';
      equal.style.boxShadow = '0 4px 0 hsl(177, 92%, 70%)';
      equal.style.color = 'hsl(198, 20%, 13%)';
    })
    
