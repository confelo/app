import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'semantic-ui-react';

import Loader from '../HOC/Loader';
import EventCard from '../EventCard';

const EventList = ({events, onEventClicked}) => {
    return (
        <div className="EventList">
            <Grid container stackable columns={1}>
                {events.map((e, index) => {
                    return (
                        <Grid.Column key={index}><EventCard detail={e} onClick={() => onEventClicked(e)}/></Grid.Column>
                    )
                })}
            </Grid>
        </div>
    );
};

EventList.propTypes = {
    events: PropTypes.array.isRequired,
    onEventClicked: PropTypes.func.isRequired
};

export default Loader('events')(EventList);