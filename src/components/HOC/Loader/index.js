import React, {Component} from 'react';

const Loader = (propName) => (WrappedComponent) => {
    return class Loader extends Component {
        isSet(prop) {
            return prop || prop.length > 0
        }

        render() {
            console.log(this.props[propName])
            return this.isSet(this.props[propName])
                ? <WrappedComponent {...this.props}/>
                : <span>Loadauje...</span>
        }
    }
};

export default Loader;