function Movements(array, movimiento) {
	let fila =0
	let pos =0
	let temp =0
	
    for (let i = 0; i < array.length; i++) {

        if(array[i].includes("p")){
            pos = array[i].indexOf("p")
            fila = i
        }
    }

    if(movimiento == "UP"){
	
		temp = array[fila -1][pos]
	
		if(temp != "-" &&  temp != "+" &&  temp != "|" ){
	
			if(temp == "g"){
	
				alert("You Win!")
	
			}else{
	
				String.prototype.reemplazar=function(index, replacement) {
					return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
				}
				
				array[fila-1] = array[fila-1].reemplazar(pos, "p")
				array[fila] = array[fila].reemplazar(pos, " ")
			}
			
		}else{
			alert("Auch! A Wall!")
		}
	
	}
	
	else if(movimiento == "DOWN"){

		temp = array[fila +1][pos]
	
		if(temp != "-" &&  temp != "+" &&  temp != "|" ){
	
			if(temp == "g"){
				alert("You Win!")
	
			}else{
	
				String.prototype.reemplazar=function(index, replacement) {
					return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
				}
				
				array[fila+1] = array[fila+1].reemplazar(pos, "p")
				array[fila] = array[fila].reemplazar(pos, " ")
			}
			
		}else{
			alert("Auch! A Wall!")
		}

	}

	
	else if(movimiento == "LEFT"){
	
		let temp = array[fila][pos-1]
	
		if(temp != "-" &&  temp != "+" &&  temp != "|" ){
	
			if(temp == "g"){
				alert("You Win!")
			}else{
	
				String.prototype.reemplazar=function(index, replacement) {
					return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
				}
				
				array[fila] = array[fila].reemplazar(pos-1, "p")
				array[fila] = array[fila].reemplazar(pos, " ")
			}
			
		}else{
			alert("Auch! A Wall!")
		}
		
	}
	
	else if(movimiento  == "RIGHT"){

		let temp = array[fila][pos+1]
	
	
		if(temp != "-" &&  temp != "+" &&  temp != "|" ){
	
			if(temp == "g"){
				alert("You Win!")
			}else{
	
				String.prototype.reemplazar=function(index, replacement) {
					return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
				}
				
				array[fila] = array[fila].reemplazar(pos+1, "p")
				array[fila] = array[fila].reemplazar(pos, " ")
			}
			
		}else{
			alert("Auch! A Wall!")
		}
	}

    return array

}

export default Movements;