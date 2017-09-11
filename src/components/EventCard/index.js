import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'semantic-ui-react';

import './EventCard.css';

const colorPool = [
    'black',
    '#FF7043',
    '#00ACC1',
    '#26A69A',
    '#FFCA28',
    '#795548',
    '#D4E157',
    '#3949AB',
    '#EF5350'
];

const EventCard = ({detail, onClick}) => {
    const color = colorPool[Math.floor(Math.random()*colorPool.length)];

    return (
        <Card className="EventCard" onClick={onClick}>
            <Card.Content>
                <Card.Header style={{color: color}}>{detail.name.substring(0, 20)}</Card.Header>
                {/* <Card.Description>{detail.description_short}</Card.Description> */}
                <span className="event_topic">React</span>
                <span className="event_topic">ML</span>
                <span className="event_topic">AI</span>
                <span className="event_topic">DDD</span>
            </Card.Content>
            <Card.Content extra>
                {detail.place}, {detail.country}
                : 25.09.2017
            </Card.Content>
        </Card>
    );
};

EventCard.propTypes = {
    detail: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default EventCard;