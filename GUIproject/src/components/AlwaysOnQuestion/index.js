import { h, render, Component } from 'preact';
import $ from 'jquery';

export default class Iphone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: ""
    };
  }

  componentDidMount() {
    this.fetchWeatherData();
  }

  fetchWeatherData = () => {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=cccf4cfba33bf1bb57c1c07f72214322";
    $.ajax({
      url: url,
      dataType: "jsonp",
      success: this.parseResponse,
      error: function (req, err) {
        console.log('API call failed ' + err);
      }
    })
  }

  parseResponse = (parsed_json) => {
    var location = parsed_json['name'];
    var temp_c = parsed_json['main']['temp'];
    var conditions = parsed_json['weather']['0']['description'];

    this.setState({
      locate: location,
      temp: temp_c,
      cond: conditions
    });
  }

  render() {
    console.log("Temperature:", this.state.temp);
    let questionSet = ['Do you need a coat?', 'Is it cold?', 'Do you need an umbrella?', 'Should you wear Wellies?', 'Is it good weather for some hot chocolate?'];
    if (this.state.temp >= 20) { // temperature threshold for warm weather
      console.log("It's warm outside!");
      questionSet = ['Is it good weather for ice cream?', 'Is it hot outside?', 'Should you wear sunglasses?', 'Should you put on Sun Screen?', 'Is it the weather for swimming?'];
    } else {
      console.log("It's cold outside!");
    }
    const randomQuestion = questionSet[Math.floor(Math.random() * questionSet.length)];
    const cFunction = this.props.clickFunction;
    if (typeof cFunction !== 'function') {
      console.log("passed something as 'clickFunction' that wasn't a function!");
    }
    return (
      <div>
        <button onClick={cFunction}>
          {randomQuestion}
        </button>
      </div>
    );
  }
}
