function adjacentElementsProduct (inputArray){
    let max = 0;
    let storedNumber = [];
    for (let i = 0 ; i < inputArray.length ; i++){
        if(i < inputArray.length - 1){
            if(inputArray[i]*inputArray[i+1] >  max){
                max  = inputArray[i]*inputArray[i+1]; 
                storedNumber[0] = inputArray[i];
                storedNumber[1] = inputArray[i+1];
            }
        }else{
            console.log(" Cặp số lớn nhất là:" + storedNumber[0] + "," + storedNumber[1] );
        }
    } 
}

function alternatingSums (a) {
    let t1 = 0;
    let t2 = 0;
    for (let i = 0; i < a.length; i++) {
       if(i%2 == 0){
            t1 += a[i];
       }
       else{
           t2 += a[i];
       }
    }
    console.log(`Tổng cân nặn của 2 team: ${[t1,t2]}`);
}