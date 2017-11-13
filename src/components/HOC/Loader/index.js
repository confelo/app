import React, {Component} from 'react';

const Loader = (propName) => (WrappedComponent) => {
    return class Loader extends Component {
        isSet(prop) {
            return prop || prop.length > 0
        }

        render() {
            return this.isSet(this.props[propName])
                ? <WrappedComponent {...this.props}/>
                : <span>Loading...</span>
        }
    }
};

export default Loader;