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
    const color = colorPool[Math.floor(Math.random() * colorPool.length)];

    return (
        <Card
            className="EventCard"
            onClick={onClick}
            style={{
            backgroundColor: '#FFF'
        }}>
            <Card.Content>
                <Card.Header style={{
                    color
                }}>{detail
                        .name
                        .substring(0, 80)}</Card.Header>
                <Card.Description style={{
                    color
                }}>{detail.description_short}</Card.Description>

            </Card.Content>
            <Card.Content
                extra
                style={{
                backgroundColor: color
            }}>
                <div className="EventCard_topics">
                    <span className="topic">React</span>
                    <span className="topic">ML</span>
                    <span className="topic">AI</span>
                    <span className="topic">DDD</span>
                </div>
                <div className="EventCard_timeplace">
                    {detail.place}, {detail.country}, 25.09.2017
                </div>
            </Card.Content>
        </Card>
    );
};

EventCard.propTypes = {
    detail: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default EventCard;