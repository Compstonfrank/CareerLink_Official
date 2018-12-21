import React, { Component } from 'react';

const Welcome = (props) => {
    return (
        <div>
        <h1> Welcome to CareerLink! </h1>

        <td>
            <th>
                <div>
                    <img src="/img/searching.jpeg" id="welcome-pics" />
                    <h4> Search potential employees and employers </h4>
                </div>
            </th>
            <th>
                <div>
                    <img src="/img/agreement.jpg" id="welcome-pics" />
                    <h4> Meet only with candidates scoring the highest mutual interest. </h4>
                </div>
            </th>
            <th>
                <div>
                    <img src="/img/brainstorming.jpg" id="welcome-pics" />
                    <h4> Begin working in more cohesive and fullfilling environments. </h4>
                </div>
            </th>
        </td>

        </div>
    )
}

export default Welcome;
