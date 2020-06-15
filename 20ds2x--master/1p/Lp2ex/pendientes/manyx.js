let anArray = [2, 3, 4, 5, 6, 2]
let busqueda = 2
let cont = 0
let encontrado = false;
for (let x of anArray) {
    if (x === busqueda){
        //console.log(x)
        encontrado = true;
       // break;
        cont++
    }
    
}

    console.log(cont)
