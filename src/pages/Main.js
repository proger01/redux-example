import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, updateDigit } from '../store/actions/counter';
import logo from '../logo.svg';
import './Main.css';

function Main() {
	const [ digitInput, setDigitInput ] = useState('');
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.value);
	const someDigit = useSelector((state) => state.someDigit);

	function onInput(event) {
		setDigitInput(event.target.value);
	}

	function counterUp() {
		dispatch(increment());
	}

	function counterDown() {
		dispatch(decrement());
	}

	function changeDigit() {
		dispatch(updateDigit(+digitInput));
	}

	function showReduxData() {
		console.log('counter', counter);
		console.log('someDigit', someDigit);
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<button onClick={counterUp}>counter up</button>
				<button onClick={counterDown}>counter down</button>
				<input type="text" onChange={onInput} value={digitInput} />
				<button onClick={changeDigit}>change some digit</button>
				<button onClick={showReduxData}>show all redux data</button>
			</header>
		</div>
	);
}

export default Main;
