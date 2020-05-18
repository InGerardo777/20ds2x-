  
//algoritmo de euclides
function euclides(n1,n2){
    while (n2!=0){
        let x=n2
        n2=n1%n2
        n1=x
    }
    return n1
}