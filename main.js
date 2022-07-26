/**
 * BT1: 
 */
document.getElementById('btnIn').onclick = function() {
    //input
    var number = document.getElementById('number').value * 1;
    //process
    var i = 0, check=0, result ="";
    while (i < number) {
        check = testSNT(i);
        if( check == 1 ) { 
            result += i + " ";
        }
        ++i;
    }
    //output
    document.getElementById('showInfor').innerHTML = "--> " + result;
}

function testSNT(n){
    var SNT = 1;
    if (n <2){
        return SNT = 0;
    }
    let i = 2;
    while(i < n){
        if(n % i == 0) {
            SNT = 0;
            break; 
        }
        i++;
    }
    return SNT;
}


