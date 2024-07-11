'use client';

import React from 'react';

import { Container } from '../@components/container';

export function ServerError() {
    return <Container error={'500'} />;
}
