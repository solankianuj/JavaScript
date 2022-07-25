let digit1=Math.floor(Math.random()*1000);
let digit2=Math.floor(Math.random()*1000);
let digit3=Math.floor(Math.random()*1000);
let digit4=Math.floor(Math.random()*1000);
let digit5=Math.floor(Math.random()*1000);

console.log(+digit1+" "+digit2+" "+digit3+" "+digit4+" "+digit5)

if(digit1>digit2 && digit2>digit3 && digit3> digit4 && digit4> digit5){
    console.log("Maximum Value Is "+digit1+"\n"+"Minimum Value Is "+digit5);
}

if(digit1<digit2 && digit2>digit3 && digit3> digit4 && digit4> digit5 && digit5>digit1){
    console.log("Maximum Value Is "+digit2+"\n"+"Minimum Value Is "+digit1);
    if(digit5<digit1){
        console.log("Maximum Value Is "+digit2+"\n"+"Minimum Value Is "+digit5);
    }
    if(digit1<digit2 && digit2<digit3 && digit3> digit4 && digit4> digit5 && digit5>digit1){
        console.log("Maximum Value Is "+digit3+"\n"+"Minimum Value Is "+digit1);
        if(digit5<digit1){
            console.log("Maximum Value Is "+digit3+"\n"+"Minimum Value Is "+digit5);
        }
        if(digit1<digit2 && digit2<digit3 && digit3<digit4 && digit4> digit5 && digit5>digit1){
            console.log("Maximum Value Is "+digit4+"\n"+"Minimum Value Is "+digit1);
            if(digit5<digit1){
                console.log("Maximum Value Is "+digit4+"\n"+"Minimum Value Is "+digit5);
            }
            if(digit1<digit2 && digit2<digit3 && digit3<digit4 && digit4<digit5 ){
                console.log("Maximum Value Is "+digit5+"\n"+"Minimum Value Is "+digit1);
           }

    }
}

if(digit1>digit2 && digit2<digit3 && digit3> digit4 && digit4> digit5 && digit3>digit1)
{
    console.log("Maximum Value Is "+digit3+"\n"+"Minimum Value Is "+digit2);
    if(digit3<digit1){
        console.log("Maximum Value Is "+digit1+"\n"+"Minimum Value Is "+digit2);
        if(digit1>digit2 && digit2<digit3 && digit3< digit4 && digit4> digit5 && digit3>digit1){
            
        }
    }

}
if(digit1>digit2 && digit2>digit3 && digit3<digit4 && digit4> digit5 && digit4>digit1)
{
    console.log("Maximum Value Is "+digit4+"\n"+"Minimum Value Is "+digit3);
    if(digit4<digit1){
        console.log("Maximum Value Is "+digit1+"\n"+"Minimum Value Is "+digit3);

    }

}
if(digit1>digit2 && digit2>digit3 && digit3> digit4 && digit4<digit5 && digit5>digit1)
{
    console.log("Maximum Value Is "+digit5+"\n"+"Minimum Value Is "+digit4);
    if(digit5<digit1){
        console.log("Maximum Value Is "+digit1+"\n"+"Minimum Value Is "+digit4);
    }
} }
