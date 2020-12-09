import React from 'react'

import { Wrapper, Sun } from './style';

import Rain from './../Rain';
import Cloud from './../Cloud';

export default function index({ rain, drizzle, cloud }) {
    return (
        <Wrapper cloud={cloud}>
            <Sun />
            { cloud && <Cloud /> }

            {
                // eslint-disable-next-line no-mixed-operators
                drizzle && <Rain drizzle={drizzle} /> || rain && <Rain />
            }
        </Wrapper>
    )
}
