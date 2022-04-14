import React, { useState, useEffect } from 'react';
import {render} from 'react-dom';
import Page from './page.jsx';
import Movements from './movements.jsx';
import styled from '@emotion/styled';
import Spinner from "./spinner.jsx";


function App(){


	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);
  
	useEffect(() => {
	  if (loading) {
		setTimeout(() => {
		  setLoading(false);
		}, 2000);
	  }
	}, [loading]);
  
	const Handeler = () => {
	  setLoading(!loading);
	  setTimeout(() => {
		setLoading(!loading);
		setShow(!show);
	  }, 2000);
	};
  

 		
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

	const Button = styled.button`
 	 color: #725c95;
	`

	if (loading) return <Spinner />;

	return(
        <div className="App">
            <div className="bottom">
				{!show && <button className ="start"onClick={Handeler}>Start Game</button>}
        		{show && 
					<div className="App">
						<h1>Ori's Maze</h1>
						<input type="number" id="w" name="w" defaultValue={wTemp} min="2" max="10" onChange={e => setWtemp(e.target.value)} />
						<input type="number" id="h" name="h" defaultValue={hTemp} min="2" max="10" onChange={e => setHtemp(e.target.value)} />
						<Button onClick={(Maze)}>NEW GAME</Button>

					</div>

				}

            </div>

			<Page laberinto={laberinto}/>  
           
        </div> 
    

    )

}

 
render(
    <App/>,
    document.getElementById('app'),
);
