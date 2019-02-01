import React, { Component } from 'react';
import logo from '../../images/logo.svg';

class Page extends Component {

    render() {
        return (
            <div className="app">
                <div className="app__header">
                    <img src={logo} className="app__logo" alt="logo" />
                    <h2>
                        PAGE DE L'AMOUR
                    </h2>
                </div>
            </div>
        );
    }
}
export default Page;