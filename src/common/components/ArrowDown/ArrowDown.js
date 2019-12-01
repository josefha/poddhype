import './arrowDown.less'
import React from 'react'

export class ArrowDown extends React.Component {
    timeout = null;
    state = {
        isScrolling: true
    };

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll);
    }

    onScroll = () => {
        setTimeout(function () {
            this.setState({ isScrolling: false });
        }.bind(this), 300);
    };

    render() {
        return (
            <div >
                {this.state.isScrolling && <div className="arrow bounce"></div>}
            </div>
        );
    }
}