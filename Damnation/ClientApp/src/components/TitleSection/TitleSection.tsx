import * as React from 'react';
import UserGreeting from './UserGreeting';

export default class TitleSection extends React.Component {
    render() {
        return (
            <div className="title-section container">
                <h1 className="title box">-DAMNATION-</h1>
                <div className="nested-item-container">
                    <UserGreeting />
                </div>
            </div>
        )
    };
}       