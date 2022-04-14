import React, { useState, useEffect } from 'react';
import {render} from 'react-dom';
import Page from './page.jsx';
import Movements from './movements.jsx';


function App(){

		
	const [laberinto, setLab] = useState([])
	const [wTemp, setWtemp] = useState(4)
	const [hTemp, setHtemp] = useState(4)

	let array = []

	const Maze = () => {

		fetch("https://maze.juanelcaballo.club/?type=json&w="+wTemp+"&h="+hTemp).then(response => {
		return response.json();

		}).then(responseInJSON => {
		
			const lab = responseInJSON.map(obj1 => {
			let objeto = "";
			obj1.forEach(i => {
				if (i == " ") {
					objeto = objeto + " ";
				} else {
					objeto = objeto + i;
				}
			});

			array.push(objeto)
			});

		});

		setLab(array)
	}


	useEffect(() =>{
		document.onkeydown = (e) => {
			e = e || window.event;
			if (e.key === 'ArrowUp') {
				setLab(Movements(laberinto, "UP"))
			} else if (e.key === 'ArrowDown') {
				setLab(Movements(laberinto, "DOWN"))
			} else if (e.key === 'ArrowLeft') {
				setLab(Movements(laberinto, "LEFT"))
			} else if (e.key === 'ArrowRight') {
				setLab(Movements(laberinto, "RIGHT"))
			}
	
		}
	
	});

	console.log(laberinto)

	return(
        <div className="App">
            <div className="bottom">
                <h1>Ori's Maze</h1>
				<input type="number" id="w" name="w" defaultValue={wTemp} min="2" max="10" onChange={e => setWtemp(e.target.value)} />
                <input type="number" id="h" name="h" defaultValue={hTemp} min="2" max="10" onChange={e => setHtemp(e.target.value)} />
                <button className="button" onClick={(Maze)}>NEW GAME</button>
            </div>

			<Page laberinto={laberinto}/>   
           
        </div> 
    

    )

}

 
render(
    <App/>,
    document.getElementById('app'),
);
