import { h, Component } from 'preact';

export default class Iphone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      fact: '',
      factSet: [],
    };
  }

  componentDidMount() {
    const factSet = this.getFactSet();
    const randFact = factSet[Math.floor(Math.random() * factSet.length)];
		//updates set of facts continuously every 6 seconds
    this.setState({ factSet, fact: randFact });

    this.interval = setInterval(() => {
      const randFact = factSet[Math.floor(Math.random() * factSet.length)];
      this.setState({ fact: randFact });
    }, 6000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick = () => {
    const { factSet } = this.state;
    const randFact = factSet[Math.floor(Math.random() * factSet.length)];
    this.setState({ fact: randFact });
  };
// If the temperature is above a certain threshold, it will return facts for warm weather
  getFactSet() {
    const { temp } = this.state;
    if (temp >= 20) { // temperature threshold for warm weather
      return ['The hottest temperature recorded for the UK is 40.3 °C!',
        'The Eiffel Tower in Paris grows taller on a hot day.',
        'The longest day in the year is during the first day of Summer!', 'More thunderstorms happen during the Summer.'];
    }
		// Otherwise, will return facts for cold weather
    return ['-27.2 °C is the coldest temperature recorded for a UK winter.', 'Scotland is the snowiest place in the UK.',
      'Unfortunately, cold does not mean snow.',
      'Some animals like to sleep throughout winter (hibernation).', 'Snowflakes have six sides!',
      'There is a saying "no two snowflakes are alike".', 'Earth is the closest to the Sun during Winter!'];
  }

  render() {
    const { fact } = this.state;
    const cFunction = this.props.clickFunction;
    if (typeof cFunction !== 'function') {
      console.log("passed something as 'clickFunction' that wasn't a function!");
    }
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{
            fontSize: '20px', // Adjust the font size as needed
            textAlign: 'center',
            display: 'block',
            width: '100%',
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            padding: '10px 30px',
          }}
        >
          {fact}
        </button>
      </div>
    );
  }
}

