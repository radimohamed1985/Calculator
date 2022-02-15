var blocks = document.querySelectorAll('.blocks');
var arr =Array.from(blocks);
var keyboard = document.getElementById('keyboard');
window.onload =function(){
    document.getElementById('keyboard').focus();
}
function key(){
    
        document.querySelector('.result').innerHTML = keyboard.value
        var xx =   document.querySelector('.result').innerHTML ;
    
        if((keyboard.value).includes('=')){
     
          equal();
          keyboard.value ='';
        }
 
        

}


arr.forEach((block)=>
block.addEventListener('click',function(){
if(block.value =='=' |block.value =='c'){document.querySelector('.result').innerHTML +='' ;    document.getElementById('keyboard').focus();
}
// if(block.value =='c'){document.querySelector('.result').innerHTML +='' ;}
else{
    document.querySelector('.result').innerHTML += block.value;
    document.getElementById('keyboard').focus();

}

}

),
document.querySelector('.clear').addEventListener('click',function(){
    document.querySelector('.result').innerHTML = '';
}),

document.querySelector('.equal').addEventListener('click',equal),

);

function equal(){
    var mystring  = document.querySelector('.result').innerHTML;

    let sum =mystring.includes('+');
    let sub =mystring.includes('-');
    let multi =mystring.includes('*');
    let dev =mystring.includes('/');
    
    if(sum == true){
        if(mystring.includes('=')){
                    let newstr =mystring.replace('=','');
                    let  myarray = newstr.split('+');
                    zz= Number(myarray.reduce(add));
                    console.log(typeof(zz));

                    function add(total,num){  return Number(total)+Number(num);};
                    console.log(myarray);
                    document.querySelector('.result').innerHTML =zz;
                }
                else{
                            let  myarray = mystring.split('+');
                            zz= Number(myarray.reduce(add));
                        console.log(typeof(zz));
                        function add(total,num){  return Number(total)+Number(num);};
                        console.log(myarray);
                                    document.querySelector('.result').innerHTML =zz;
                        }
                    }
                        if(sub == true){
                            if(mystring.includes('=')){
                            let newstr =   mystring.replace('=','');
                            console.log(mystring);
                            console.log(newstr);

                        
                            let  myarray = newstr.split('-');
                        
                            zz= Number(myarray.reduce(add));
                        console.log(typeof(zz));
                        console.log(zz);
                        
                        function add(total,num){  return Number(total)-Number(num);};
                        console.log(myarray);
                                    document.querySelector('.result').innerHTML =zz;
                        }
                    else{
                        let  myarray = mystring.split('-');
                        
                        zz= Number(myarray.reduce(add));
                    console.log(typeof(zz));
                    
                    function add(total,num){  return Number(total)-Number(num);};
                    console.log(myarray);
                                document.querySelector('.result').innerHTML =zz;
                    }
                    }

    if(multi == true){
        if(mystring.includes('=')){
            let newstr =mystring.replace('=','');
            let  myarray = newstr.split('*');
            zz= Number(myarray.reduce(add));
           console.log(typeof(zz));
           
           function add(total,num){  return Number(total)*Number(num);};
           console.log(myarray);
                    document.querySelector('.result').innerHTML =zz;
        }
        else{
            let  myarray = mystring.split('*');
            zz= Number(myarray.reduce(add));
           console.log(typeof(zz));
           
           function add(total,num){  return Number(total)*Number(num);};
           console.log(myarray);
                    document.querySelector('.result').innerHTML =zz;
        }
 
    }
    if(dev == true){
        if(mystring.includes('=')){
            let newstr=mystring.replace('=','');
            let  myarray = newstr.split('/');
            zz= Number(myarray.reduce(add));
           console.log(typeof(zz));
           
           function add(total,num){  return Number(total)/Number(num);};
           console.log(myarray);
                    document.querySelector('.result').innerHTML =zz;
        }
        else{
            let  myarray = mystring.split('/');
            zz= Number(myarray.reduce(add));
           console.log(typeof(zz));
           
           function add(total,num){  return Number(total)/Number(num);};
           console.log(myarray);
                    document.querySelector('.result').innerHTML =zz;
        }
    
    }
}