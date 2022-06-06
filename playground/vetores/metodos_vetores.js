function main(){

    const numeros = Array.from({length: 5}, (v, i) => i)
    console.log(numeros)
    
    numeros.push(9)
    console.log(numeros)
    // Appends new elements to the end of an array, 
    // and returns the new length of the array.

    numeros.pop()
    console.log(numeros)
    // Removes the last element from an array and returns it. 
    // If the array is empty, undefined is returned 
    // and the array is not modified.

    numeros.shift()
    console.log(numeros)
    // Removes the first element from an array and returns it. 
    // If the array is empty, undefined is returned 
    // and the array is not modified.

    numeros.unshift(8, 10)
    console.log(numeros)

    const novo_vetor = numeros.concat([-1, -10])
    console.log(novo_vetor)
    // Combines two or more arrays. 
    // This method returns a new array 
    // without modifying any existing arrays.


    const novo_vetor2 = [...numeros, ...[-1, -10]]
    console.log(novo_vetor2)
    // Spread operator ...

    console.log(numeros)

    const texto = numeros.join('-')
    console.log(texto)
    // Adds all the elements of an array into a string, 
    // separated by the specified separator string.

    numeros.sort()
    console.log(numeros)
    // Sorts an array in place. 
    // This method mutates the array and 
    // returns a reference to the same array.

    numeros.sort((v1, v2) => {
        if (v1 < v2) return -1
        if (v1 > v2) return 1
        
        return 0
    })
    console.log(numeros)

}

main()