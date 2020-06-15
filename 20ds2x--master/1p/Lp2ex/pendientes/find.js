let anArray = [2, 3, 4, 5, 6]
let busqueda = 2;
let encontrado = false;
for (let x of anArray) {
    if (x === busqueda){
        encontrado = true;
    }

}
if (encontrado === true){
    console.log('listo')
}
else
console.log('perdido')
