// import preact
import { h, Component } from 'preact';

// import required Components from 'components/'
import MainAppDisplay from './MainAppDisplay';


export default class App extends Component {
	render(){
		return (
			<div id="app">
				<MainAppDisplay/ >
			</div>
		);

	}
}