import { Font, Typography } from './@enums';

export const fredoka = [
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

export const inter = [
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
        fontFamily: fredoka,
        fontWeight: Font.SemiBold,
        fontSize: 70,
    },
    FH1: {
        fontFamily: fredoka,
        fontWeight: Font.SemiBold,
        fontSize: 45,
    },
    FH2: {
        fontFamily: fredoka,
        fontWeight: Font.SemiBold,
        fontSize: 32,
    },
    FH3: {
        fontFamily: fredoka,
        fontWeight: Font.SemiBold,
        fontSize: 25,
    },
    FH4: {
        fontFamily: fredoka,
        fontWeight: Font.SemiBold,
        fontSize: 20,
    },
    FBody1: {
        fontFamily: fredoka,
        fontWeight: Font.Medium,
        fontSize: 25,
    },
    FBody2: {
        fontFamily: fredoka,
        fontWeight: Font.Medium,
        fontSize: 19,
    },
    FBody3: {
        fontFamily: fredoka,
        fontWeight: Font.Medium,
        fontSize: 9,
    },
    IH1: {
        fontFamily: inter,
        fontWeight: Font.Bold,
        fontSize: 25,
    },
    IH2: {
        fontFamily: inter,
        fontWeight: Font.Bold,
        fontSize: 20,
    },
    IH3: {
        fontFamily: inter,
        fontWeight: Font.Bold,
        fontSize: 17,
    },
    ISubtitle: {
        fontFamily: inter,
        fontWeight: Font.SemiBold,
        fontSize: 17,
    },
    IBody1: {
        fontFamily: inter,
        fontWeight: Font.Medium,
        fontSize: 19,
    },
    IBody2: {
        fontFamily: inter,
        fontWeight: Font.Regular,
        fontSize: 16,
    },
};
