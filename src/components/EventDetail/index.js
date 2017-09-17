import React from 'react';
import {Grid} from 'semantic-ui-react';

import EventMap from '../EventMap';
import './EventDetail.css';

const EventDetail = props => {
    return (
        <div className="EventDetail">
            <Grid columns={2} stackable className="EventDetail_grid">
                <Grid.Column width={4} className="EventGeneralInfo">
                    <h1>We Are Developers</h1>
                    <div className="-details">
                        <p className="-detail">Vienna, Austria</p>
                        <p className="-detail">TestArena, Someplatz 21, Hauptstrasse Gasse</p>
                        <p className="-detail">11.05.2017 - 14.05.2017</p>
                    </div>

                    <EventMap></EventMap>
                </Grid.Column>
                <Grid.Column width={12} className="EventDescription">
                    <div className="-description">
                        <h2>About this event</h2>
                        <p>What is WeAreDevelopers all about? We are united tech professionals, empowered through code and as diverse as the languages we yield. In one of the leading startup capitals of Europe, the WeAreDevelopers World Congress brings together over 8,000 brightest minds in tech for an exciting event.</p>
                    </div>
                </Grid.Column>
            </Grid>

            <div className="EventDetailCloser" onClick={props.onClose}>
                X
            </div>
        </div>
    );
};

export default EventDetail;