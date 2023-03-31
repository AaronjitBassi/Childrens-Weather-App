// Importing necessary modules and styles
import { h, render, Component } from 'preact';
import style from './style';
import $ from 'jquery';


/*
These buttons are either always on or important to the functionality of the app.
These buttons inlcude:
	- The initial display weather InitialDisplay when first entering the app to display the weather and proceed
	- The RefreshButton InitialDisplay is used to RefreshButton the weather if it has changed as well as the question/ fun fact
	- The fun fact which is always displayed to the user as well as it being automatically cycled displaying new content
*/
import InitialDisplayStyle from '../InitialDisplayWeatherButton/buttonStyle';
import RefreshStyle from '../RefreshButton/buttonStyle';
import FunFactStye from '../AlwaysOnFunFact/buttonStyle';
import FunFact from '../AlwaysOnFunFact';
import InitialDisplay from '../InitialDisplayWeatherButton';
import Refresh from '../RefreshButton';

/*
These buttons are related to the questions the user can answer to further enhnace interactivity
These buttons inlcude:
	- The actual question which can be refreshed
	- The YesButton/no buttons to answer the questions
	- A display to show the user if they got the answer correct/incorrect
*/
import QuestionButtonStyle from '../AlwaysOnQuestion/buttonStyle';
import yesButtonStyle from '../yesButton/buttonStyle';
import noButtonStyle from '../noButton/buttonStyle';
import correctAnswerStyle from '../correctAnswer/buttonStyle';
import wrongInputStyle from '../wrongAnswer/buttonStyle';
import Question from '../AlwaysOnQuestion';
import YesButton from '../yesButton';
import NoButton from '../noButton';

import DisplayIfCorrect from '../correctAnswer';
import DisplayIfWrong from '../wrongAnswer';

/*
These buttons are related to the display of the monster during 'cold' weather
These buttons inlcude:
	- A InitialDisplay to change th colour of the monster, when pressed a panel of three more buttons appear of the various colours that can be selected
	- Green/ Blue/ Purple buttons to change the mosters colour as well as their accessories (umbrella and scarf)
	- Also the importation of the related images to these buttons
*/
import ChangeMonsterColourStyle from '../ChangeMonsterColour/buttonStyle';
import DisplayBlueMonsterStyle from '../DisplayBlueMonster/buttonStyle';
import DisplayGreenMonsterStyle from '../DisplayGreenMonster/buttonStyle';
import DisplayPurpleMonsterStyle from '../DisplayPurpleMonster/buttonStyle';
import ChangeMonsterColourButton from '../ChangeMonsterColour';
import DisplayBlueMonsterButton from '../DisplayBlueMonster';

import DisplayGreenMonsterButton from '../DisplayGreenMonster';
import DisplayPurpleMonsterButton from '../DisplayPurpleMonster';

import blueMonsterImage from '../../assets/backgrounds/BlueMonster.png';
import greenMonsterImage from '../../assets/backgrounds/GreenMonster.png';
import purpleMonsterImage from '../../assets/backgrounds/PurpleMonster.png';



/*
These buttons are related to the display of the monster during 'hot' weather
These buttons inlcude:
	- A InitialDisplay to display the monster without any accessories
	- Two other buttons which wehn selected can give the monster an ice-cream/ hat
	- Also the importation of the related images to these buttons
*/
import HotWeatherAddMonsterStyle from '../HotWeatherAddMonster/buttonStyle';
import HotWeatherAddHatStyle from '../HotWeatherAddHat/buttonStyle';
import HotWeatherAddIceCreamStyle from '../HotWeatherAddIceCream/buttonStyle';
import HotWeatherAddMonsterButton from '../HotWeatherAddMonster';
import HotWeatherAddHatButton from '../HotWeatherAddHat';
import HotWeatherAddIceCreamButton from '../HotWeatherAddIceCream';
import PlainMonster from '../../assets/backgrounds/PlainSummerMonster.png';
import Hat from '../../assets/backgrounds/SummerHat.jpg';
import IceCream from '../../assets/backgrounds/SummerIceCream.jpg';



// Initializing component states to the related buttons to make the right buttons are availble to the user at the right time/beginning
export default class Iphone extends Component {
	constructor(props){
		super(props);
		this.state.temp = "";
		this.setState({ display: true });
	}
// Fetches weather data for displays as well it being used for the RefreshButton InitialDisplay
	fetchWeatherData = () => {
		var url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=cccf4cfba33bf1bb57c1c07f72214322";
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
	}

	// This function is called when th initial InitialDisplay is pressed. It loads up all the subsequent buttons to display
	// the homepage with all the functionalities
	InitialiseApp = ()=>{
		this.fetchWeatherData();
		// Always on/Important buttons
		this.setState({ display: false });
		this.setState({displayRefresh:true})
		this.setState({displayFact: true})
		// Buttons related to the question
		this.setState({displayQuestion:true})
		this.setState({displayYes:true})
		this.setState({displayNo:true})
		
		// Buttons realted to the cold weather monster
		this.setState({displayChangeColourButton:true})

		//Buttons related to the hot weather monster
		this.setState({addMonsterButton:true})
	}
	HandleRefresh = ()=>{
		this.InitialiseApp();
		this.setState({displayBlueMonsterButton:false})
		this.setState({displayGreenMonsterButton:false})
		this.setState({displayPurpleMonsterButton:false})
		this.setState({showGreenMonster:false})
		this.setState({showBlueMonster:false})
		this.setState({showPurpleMonster:false})
		this.setState({showPlainMonster:false})
		this.setState({showIceCreamButton:false})
		this.setState({showHatButton:false})
		this.setState({displayWrong:false})
		this.setState({displayAnswer:false})
		this.setState({showHat:false})
		this.setState({showIceCream:false})


	}
// Informs the user they got the correct answer and refreshes the question
	showAnswer = () =>{
		this.setState({displayAnswer:true})
		this.setState({displayQuestion:false})
		this.setState({displayYes:false})
		this.setState({displayNo:false})
		this.setState({displayWrong:false})
	}
	
  // Handles input for wrong answer and asks the user to answer the question again
	inputWrong = () =>{
		this.setState({displayWrong:true})
		this.setState({displayQuestion:false})
	}

 // Shows available monster colors and updates the state
	ShowAvailableColours =() =>{
		this.setState({displayChangeColourButton:false})
		this.setState({displayBlueMonsterButton:true})
		this.setState({displayGreenMonsterButton:true})
		this.setState({displayPurpleMonsterButton:true})
	}
	// Functions for showing specific monster color and updating the state
	showBlueMonster=()=>{
		this.setState({showBlueMonster:true})
		this.setState({showGreenMonster:false})
		this.setState({showPurpleMonster:false})
	}
	showGreenMonster=()=>{
		this.setState({showGreenMonster:true})
		this.setState({showBlueMonster:false})
		this.setState({showPurpleMonster:false})
	}
	showPurpleMonster=()=>{
		this.setState({showGreenMonster:false})
		this.setState({showBlueMonster:false})
		this.setState({showPurpleMonster:true})
	}
	// Adds a plain monster and updates the state
	AddMonster=()=>{
		this.setState({addMonsterButton:false})
		this.setState({showPlainMonster:true})
		this.setState({showIceCreamButton:true})
		this.setState({showHatButton:true})
	}
	 // Functions for displaying specific accessory and updating the state
	displayIceCream=()=>{
		this.setState({showIceCream:true})
		this.setState({showHat:false})
		this.setState({showIceCreamButton:false})
		this.setState({showHatButton:true})
	}
	displayHat=()=>{
		this.setState({showHat:true})
		this.setState({showIceCream:false})
		this.setState({showHatButton:false})
		this.setState({showIceCreamButton:true})
	}

// Rendering the component/ buttons into their positions
	render() {

		// there are two screen options (during a cold day/ during a hot day)
		// The background is different to each one and is adapted to each.
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		let containerStyles = `${style.container}`;

		if (this.state.temp !== "") {
		  if (this.state.temp < 20) {
			if ((this.state.cond).includes("rain", 0)) {
				containerStyles += ` ${style.coldRainy}`;
			}
			containerStyles += ` ${style.cold}`;
		  } else if (this.state.temp >= 20) {
			if ((this.state.cond).includes("rain", 0)) {
				containerStyles += ` ${style.warmRainy}`;
			}
			containerStyles += ` ${style.warm}`;
		  }
		}
		
		return (
		  <div class={ containerStyles }>
			<div class={ style.header }>
			  <div class={ style.city }>{ this.state.locate }</div>
			  <div class={ style.conditions }>{ this.state.cond }</div>
			  <span class={ tempStyles }>{ this.state.temp }</span>
			</div>

			<div class={ InitialDisplayStyle.container }>
			  { this.state.display ? <InitialDisplay class={ InitialDisplayStyle.button } clickFunction={ this.InitialiseApp }/ > : null }
			</div>
			<div class={ RefreshStyle.container }>
			  { this.state.displayRefresh ? <Refresh class={ RefreshStyle.button } clickFunction={ this.HandleRefresh }/ > : null }
		    </div>
			<div class={ QuestionButtonStyle.container }>
			  { this.state.displayQuestion ? <Question class={ QuestionButtonStyle.button }/ > : null }
		    </div>
			<div class = {FunFactStye.container }> 
			  { this.state.displayFact ? < FunFact class = { FunFactStye.button }/ > : null } 
			</div>
			<div class={ yesButtonStyle.container }>
			  { this.state.displayYes ? <YesButton class={ yesButtonStyle.button } clickFunction={ this.showAnswer }/ > : null }
		    </div>
			<div class={ noButtonStyle.container }>
			  { this.state.displayNo ? <NoButton class={ noButtonStyle.button } clickFunction={ this.inputWrong }/ > : null }
		    </div>

		    <div class={ correctAnswerStyle.container }>
		      { this.state.displayAnswer ? <DisplayIfCorrect class={ correctAnswerStyle.button }/ > : null }
	        </div>
		    <div class={ wrongInputStyle.container }>
			  { this.state.displayWrong ? <DisplayIfWrong class={ wrongInputStyle.button }/ > : null }
		    </div>

			{this.state.temp < 20 ? 
				<div class={ ChangeMonsterColourStyle.container }>
				{ this.state.displayChangeColourButton ? <ChangeMonsterColourButton class={ ChangeMonsterColourStyle.button } clickFunction={ this.ShowAvailableColours }>Change Colour</ChangeMonsterColourButton> : null }
				</div>
			: null }
		    <div class={ DisplayBlueMonsterStyle.container }>
			{ this.state.displayBlueMonsterButton ? <DisplayBlueMonsterButton class={ DisplayBlueMonsterStyle.button } clickFunction={ this.showBlueMonster }/ > : null }
		    </div>
		    <div class={ DisplayGreenMonsterStyle.container }>
			{ this.state.displayGreenMonsterButton ? <DisplayGreenMonsterButton class={ DisplayGreenMonsterStyle.button } clickFunction={ this.showGreenMonster }/ > : null }
		    </div>
		    <div class={ DisplayPurpleMonsterStyle.container }>
			{ this.state.displayPurpleMonsterButton ? <DisplayPurpleMonsterButton class={ DisplayPurpleMonsterStyle.button } clickFunction={ this.showPurpleMonster }/ > : null }
		    </div>
			
			<div>
			{ this.state.showBlueMonster ? <img src={ blueMonsterImage } alt="Blue monster" style="position: relative; top: 380px; left: 95px;" /> : null }
			</div>
			<div>
			{ this.state.showGreenMonster ? <img src={ greenMonsterImage } alt="green monster" style="position: relative; top: 380px; left: 95px;" /> : null }
			</div>
			<div>
			{ this.state.showPurpleMonster ? <img src={ purpleMonsterImage } alt="purple monster" style="position: relative; top: 380px; left: 95px;" /> : null }
			</div>

			{this.state.temp >= 20 ? 
				<div class={ HotWeatherAddMonsterStyle.container }>
				{ this.state.addMonsterButton ? <HotWeatherAddMonsterButton class={ HotWeatherAddMonsterStyle.button } clickFunction={ this.AddMonster }>Add Monster</HotWeatherAddMonsterButton> : null }
				</div>
			: null }
			<div>
			{ this.state.showPlainMonster ? <img src={ PlainMonster } alt="plain monster" style="position: relative; top: 380px; left: 150px;" /> : null }
			</div>
		    <div class={ HotWeatherAddIceCreamStyle.container }>
			{ this.state.showIceCreamButton ? <HotWeatherAddIceCreamButton class={ HotWeatherAddIceCreamStyle.button } clickFunction={ this.displayIceCream }/ > : null }
		    </div>
		    <div class={ HotWeatherAddHatStyle.container }>
			{ this.state.showHatButton ? <HotWeatherAddHatButton class={ HotWeatherAddHatStyle.button } clickFunction={ this.displayHat }/ > : null }
		    </div>

			<div>
			{ this.state.showIceCream ? <img src={ IceCream } alt="ice cream" style={{ position: 'relative', top: '25px', left: '65px', width: '200px', height: '200px' }} /> : null }
			</div>
			<div>
			{ this.state.showHat ? <img src={ Hat } alt="hat" style={{ position: 'relative', top: '-170px', left: '230px', width: '320px', height: '180px' }} /> : null }
			</div>

		  </div>
		);
	  }
	// Function to parse the response from the weather API into our program
	parseResponse = (parsed_json) => {
		var location = parsed_json['name'];
		var temp_c = parsed_json['main']['temp'];
		var rounded_temp_c = parseFloat(temp_c.toFixed(0)); // Round the temperature to 0 decimal place
		var conditions = parsed_json['weather']['0']['description'];
	
		this.setState({
			locate: location,
			temp: rounded_temp_c, // Use the rounded temperature value
			cond : conditions
		});      
	}
}
