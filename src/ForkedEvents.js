import React from 'react';
import styled from 'styled-components';
import { WrapperLabel } from './index'

const ForkedEventsWrapper = styled.div`
    font-family: Arial;
    border: 1px green solid;
    padding: 10px;
`

const ForkedEvents = props => (
    <ForkedEventsWrapper>
        <div>
            <WrapperLabel>ForkedEvents Component</WrapperLabel>
            <ul>
                {props.events
                    .filter((event) => event.type === 'ForkEvent')
                    .map((event, i) => (
                        <li key={`event-${i}`}>
                            <a href={`https://github.com/${event.repo.name}`}>{event.repo.name}</a>
                        </li>
                    ))}
            </ul>
        </div>
    </ForkedEventsWrapper>
)

export default ForkedEvents;