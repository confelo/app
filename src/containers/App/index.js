import React, {Component} from 'react';
import {Button, Grid} from 'semantic-ui-react';

// import Search from '../../components/Search';
import EventList from '../../components/EventList';
import EventDetail from '../../components/EventDetail';
import './App.css';
// import logo from '../../assets/logo.svg';
// import background from '../../assets/intro_bg.jpg';

let someEvents = [
  {
    name: 'The Next Web Conf.',
    description_short: 'Europes leading tech festival',
    place: 'Amsterdam',
    country: 'Netherlands'
  }, {
    name: 'React Conf',
    description_short: 'Largest European conference dedicated to React.js',
    place: 'Paris',
    country: 'France'
  }, {
    name: 'We Are Developers',
    description_short: 'Europes leading tech festival',
    place: 'Wien',
    country: 'Austria'
  }, {
    name: 'We Are Developers Here we are',
    description_short: 'Europes leading tech festival',
    place: 'Wien',
    country: 'Austria'
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

    this.handleEventClick = this
      .handleEventClick
      .bind(this);

    this.handleEventDetailClose = this
      .handleEventDetailClose
      .bind(this);
  }

  handleEventClick(e) {
    console.log("EE : ", e);
    this.setState({isSelectedEventVisible: true});
  }

  handleEventDetailClose() {
    this.setState({isSelectedEventVisible: false});
  }

  renderEventDetail() {
    if (this.state.isSelectedEventVisible) {
      return (<EventDetail onClose={this.handleEventDetailClose}/>);
    }
  }

  render() {
    return (
      <div className="App">
        {/* <div
          className="App-header-wrapper"
          style={{
          background: background
        }}>
          <Grid container stackable columns={1}>
            <Grid.Column>
              <div className="App-header">
                <div className="App-logo">confelo</div>
                <div className="-action">
                  <span>Add event</span>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </div> */}
        <div className="home-intro">
          <Grid container>
            <h1>confelo: find the best events in tech</h1>
          </Grid>
        </div>
        <div className="events-wrapper">
          <EventList events={someEvents} onEventClicked={this.handleEventClick}/> {this.renderEventDetail()}
        </div>
        <div className="view-more">
          <div className="-action">
            <Button fluid>Load more tech events</Button>
          </div>
        </div>

        <footer>Stay informed</footer>
      </div>
    );
  }
}

export default App;
