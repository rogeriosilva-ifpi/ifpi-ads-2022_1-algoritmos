function main(){
    
    const alunos = ['Maria', 'Joana', 'Bia', 'João', 'Igor']

    console.log(alunos)

    const fatia = alunos.slice(0, 2)
    console.log(fatia)
    // Returns a copy of a section of an array

    console.log(alunos)

    const removidos = alunos.splice(1, 1)
    console.log(alunos)
    console.log(removidos)
    // Removes elements from an array and, if necessary, 
    // inserts new elements in their place, 
    // returning the deleted elements.

}


function get_number(){
    if (bee){
        return lines[index++]
    }else{
        return Number(input('Digite um número:'))
    }
}

main()