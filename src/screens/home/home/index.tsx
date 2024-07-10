'use client';

import React from 'react';

import { FTitle } from '@/components/typography/FTitle';
import { FH1 } from '@/components/typography/FH1';
import { FH2 } from '@/components/typography/FH2';
import { FH3 } from '@/components/typography/FH3';
import { FH4 } from '@/components/typography/FH4';
import { FBody1 } from '@/components/typography/FBody1';
import { FBody2 } from '@/components/typography/FBody2';
import { IH1 } from '@/components/typography/IH1';
import { IH2 } from '@/components/typography/IH2';
import { IH3 } from '@/components/typography/IH3';
import { ISubtitle } from '@/components/typography/ISubtitle';
import { IBody1 } from '@/components/typography/IBody1';
import { IBody2 } from '@/components/typography/IBody2';

export function Home() {
    return (
        <div>
            <FTitle>FTitle</FTitle>
            <FH1>FH1</FH1>
            <FH2>FH2</FH2>
            <FH3>FH3</FH3>
            <FH4>FH4</FH4>
            <FBody1>FBody1</FBody1>
            <FBody2>FBody2</FBody2>
            <IH1>IH1</IH1>
            <IH2>IH2</IH2>
            <IH3>IH3</IH3>
            <ISubtitle>ISubtitle</ISubtitle>
            <IBody1>IBody1</IBody1>
            <IBody2>IBody2</IBody2>
        </div>
    );
}
