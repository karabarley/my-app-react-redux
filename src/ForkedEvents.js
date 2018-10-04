import React from 'react';
import styled from 'styled-components';
import { WrapperLabel } from './index'

const ForkedEventsWrapper = styled.div`
    font-family: Arial;
    border: 1px green solid;
    padding: 10px;
`
const splitRepoName = (string) => {
    const stringArray = string.split('/')
    return stringArray[1]
}
const ForkedEvents = props => (
    <ForkedEventsWrapper>
        <div>
            <WrapperLabel>ForkedEvents Component</WrapperLabel>
            <ul>
                {props.events
                    .filter((event) => event.type === 'ForkEvent')
                    .map((event, i) => (
                        <li key={`event-${i}`}>
                            <p>You forked <a href={`https://github.com/${event.repo.name}`}>{splitRepoName(event.repo.name)}</a> from {event.repo.name} </p>
                        </li>
                    ))}
            </ul>
        </div>
    </ForkedEventsWrapper>
)

export default ForkedEvents;