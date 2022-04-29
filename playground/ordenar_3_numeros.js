import prompt from 'prompt-sync';

const input = prompt()

function main(){
    const [v1, v2, v3] = input('Valores: ').split(' ').map(Number)
    
    const [a, b, c] = ordernar_valores(v1, v2, v3);

    console.log(v1, v2, v3)
    console.log(a, b, c)
}

function ordernar_valores_v1(v1, v2, v3){
    if (v1 > v2){
        if (v2 > v3){
            return [v1, v2, v3]
        }else if (v3 > v1){
            return [v3, v1, v2]
        }else{
            return [v1, v3, v2]
        }
    }else{ // v2 > v1
        if (v1 > v3){
            return [v2, v1, v3]
        }else if (v3 > v2){
            return [v3, v2, v1]
        }else{
            return [v2, v3, v1]
        }
    }
}

function ordernar_valores(v1, v2, v3){
    if (v1 > v2 && v1 > v3 && v2 > v3){
        return [v1, v2, v3]
    }else if (v1 > v2 && v3 > v2){
        return [v1, v3, v2]
    }else if (v1 < v2 && v1 < v3 && v2 < v3){
        return [v3, v2, v1]
    }else if (v1 > v2 && v1 > v3 && v2 < v3){
        return [v1, v3, v2]
    }
}

main()