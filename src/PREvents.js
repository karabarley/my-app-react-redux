import React from 'react';
import styled from 'styled-components';
import { WrapperLabel } from './index'

const PREventsWrapper = styled.div`
    font-family: Arial;
    border: 1px green solid;
    padding: 10px;
`

const colorCode = (status) => {
    if (status === 'open'){
        return 'green'
    } else if (status === 'closed'){
        return 'red'
    } else if (status === 'merged') {
        return 'blue'
    } else{
        return 'black'
    }
}

const PRStatus = styled.p`
color: ${props => colorCode(props.status)};
`

const PREvents = props => (
    <PREventsWrapper>
        <WrapperLabel>PREvents Component</WrapperLabel>
        <ul>
            {props.events
                .filter((event) => event.type === 'PullRequestEvent')
                .map((event, i) => (
                    <li key={`event-${i}`}>
                        <a href={`https://github.com/${event.repo.name}/pulls/${event.payload.number}`}>
                            {event.payload.pull_request.title}
                        </a>
                        <PRStatus status={event.payload.pull_request.state}>
                            {event.payload.pull_request.state}
                        </PRStatus>
                    </li>
                ))
            }
        </ul>
    </PREventsWrapper>
)

export default PREvents;