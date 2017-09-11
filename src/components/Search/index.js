import React from 'react';
import {Input} from 'semantic-ui-react';

import './Search.css';

const Search = props => {
    return (
        <div className="Search">
            <Input
                fluid={props.isFluid}
                size={props.size}
                type="search"
                placeholder={props.placeholder}/>
        </div>
    );
};

export default Search;