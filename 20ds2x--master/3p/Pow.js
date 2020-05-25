function potencia(b,e){
    let p=1;
    for(let i=0; i<e; i++){
	p=b*p;
    }
    return p
}

console.log(potencia(4,3))
