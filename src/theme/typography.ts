import { Font, Typography } from './@enums';

export const FREDOKA = [
    'Fredoka',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',');

export const INTER = [
    'Inter',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
].join(',');

export const typography: {
    [key in Typography]: {
        fontFamily: string;
        fontWeight: Font;
        fontSize: number;
    };
} = {
    FTitle: {
        fontFamily: FREDOKA,
        fontWeight: Font.SemiBold,
        fontSize: 70,
    },
    FH1: {
        fontFamily: FREDOKA,
        fontWeight: Font.SemiBold,
        fontSize: 45,
    },
    FH2: {
        fontFamily: FREDOKA,
        fontWeight: Font.SemiBold,
        fontSize: 32,
    },
    FH3: {
        fontFamily: FREDOKA,
        fontWeight: Font.SemiBold,
        fontSize: 25,
    },
    FH4: {
        fontFamily: FREDOKA,
        fontWeight: Font.SemiBold,
        fontSize: 20,
    },
    FBody1: {
        fontFamily: FREDOKA,
        fontWeight: Font.Medium,
        fontSize: 25,
    },
    FBody2: {
        fontFamily: FREDOKA,
        fontWeight: Font.Medium,
        fontSize: 19,
    },
    FBody3: {
        fontFamily: FREDOKA,
        fontWeight: Font.Medium,
        fontSize: 9,
    },
    IH1: {
        fontFamily: INTER,
        fontWeight: Font.Bold,
        fontSize: 25,
    },
    IH2: {
        fontFamily: INTER,
        fontWeight: Font.Bold,
        fontSize: 20,
    },
    IH3: {
        fontFamily: INTER,
        fontWeight: Font.Bold,
        fontSize: 17,
    },
    ISubtitle: {
        fontFamily: INTER,
        fontWeight: Font.SemiBold,
        fontSize: 17,
    },
    IBody1: {
        fontFamily: INTER,
        fontWeight: Font.Medium,
        fontSize: 19,
    },
    IBody2: {
        fontFamily: INTER,
        fontWeight: Font.Regular,
        fontSize: 16,
    },
};
