import React, {Component} from 'react';
import {Button, Grid} from 'semantic-ui-react';

// import Search from '../../components/Search';
import EventList from '../../components/EventList';
import EventDetail from '../../components/EventDetail';
import './App.css';
// import logo from '../../assets/logo.svg'; import background from
// '../../assets/intro_bg.jpg';

let someEvents = [
  {
    name: 'The Next Web Conf.',
    description_short: 'Europes leading tech festival',
    place: 'Amsterdam',
    country: 'NL'
  }, {
    name: 'React Conf',
    description_short: 'Largest European conference dedicated to React.js',
    place: 'Paris',
    country: 'FR'
  }, {
    name: 'We Are Developers',
    description_short: 'Europes leading tech festival',
    place: 'Wien',
    country: 'AT'
  }, {
    name: 'We Are Developers Here we are',
    description_short: 'Europes leading tech festival',
    place: 'Wien',
    country: 'AT'
  }
];

someEvents = someEvents
  .concat(someEvents)
  .concat(someEvents)
  .concat(someEvents)
  .concat(someEvents)
  .concat(someEvents);

class App extends Component {
  constructor() {
    super();

    this.state = {
      isSelectedEventVisible: false,
      selectedEventId: '',
      selectedEvent: {}
    }

    // this.handleEventClick = this
    //   .handleEventClick
    //   .bind(this);

    // this.handleEventDetailClose = this
    //   .handleEventDetailClose
    //   .bind(this);
  }

  // handleEventClick(e) {
  //   console.log("EE : ", e);
  //   this.setState({isSelectedEventVisible: true});
  // }

  // handleEventDetailClose() {
  //   this.setState({isSelectedEventVisible: false});
  // }

  // renderEventDetail() {
  //   if (this.state.isSelectedEventVisible) {
  //     return (<EventDetail onClose={this.handleEventDetailClose}/>);
  //   }
  // }

  render() {
    return (
      <div className="App">
        <div className="AppTitle">
          <Grid container>
            <h1>confelo</h1>
            <h2>discover best events in tech</h2>
          </Grid>
        </div>
        <div className="Events">
          <EventList events={someEvents}/>
        </div>
        <footer>Stay informed</footer>
      </div>
    );
  }
}

export default App;
