// Eficiencia O(n^2)
// Hace un barrido a lo largo del array dentro de otro
function greatestNumber_n2(array){
    for(i of array){
        is_i_greatest = true
        for (j of array){
            if (j > i){
                is_i_greatest = false
            }
        }
        if(is_i_greatest){
            return i
        }
    }
}

// Eficiencia O(n)
// Hace un solo barrido a lo largo del array
function greatestNumber_n(array){
    started = false
    for(i of array){
        if(!started){
            greatest = i
            started = true
        }
        else{
            if(i > greatest){
                greatest = i
            }
        }
    }
    return greatest
}

function containsX(string) {
    foundX = false;
    for(let i = 0; i < string.length; i++) {
     if (string[i] === "X") {
       foundX = true;
       }
     }
     return foundX;
    }


array = [3,4,5,10,9]
console.log(greatestNumber_n(array))
console.log(greatestNumber_n2(array))