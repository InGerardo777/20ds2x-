function factorial(n) {

    let f=1, i=1

    for(;i<=n; i++){
	f=f*i
    }

    return f    
}

function perm(n,r) {
    let npr=factorial((n))/factorial((n-r))
    
    return npr;
    
}


console.log(perm(7,3))









 
