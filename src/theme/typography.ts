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
        lineHeight: number;
    };
} = {
    FTitle: {
        fontFamily: fredoka,
        fontWeight: Font.SemiBold,
        fontSize: 70,
        lineHeight: 65 / 70,
    },
    FH1: {
        fontFamily: fredoka,
        fontWeight: Font.SemiBold,
        fontSize: 45,
        lineHeight: 40 / 45,
    },
    FH2: {
        fontFamily: fredoka,
        fontWeight: Font.SemiBold,
        fontSize: 32,
        lineHeight: 40 / 32,
    },
    FH3: {
        fontFamily: fredoka,
        fontWeight: Font.SemiBold,
        fontSize: 25,
        lineHeight: 28 / 25,
    },
    FH4: {
        fontFamily: fredoka,
        fontWeight: Font.SemiBold,
        fontSize: 20,
        lineHeight: 28 / 20,
    },
    FBody1: {
        fontFamily: fredoka,
        fontWeight: Font.Medium,
        fontSize: 25,
        lineHeight: 28 / 25,
    },
    FBody2: {
        fontFamily: fredoka,
        fontWeight: Font.Medium,
        fontSize: 19,
        lineHeight: 28 / 19,
    },
    FBody3: {
        fontFamily: fredoka,
        fontWeight: Font.Medium,
        fontSize: 9,
        lineHeight: 20 / 9,
    },
    IH1: {
        fontFamily: inter,
        fontWeight: Font.Bold,
        fontSize: 25,
        lineHeight: 28 / 25,
    },
    IH2: {
        fontFamily: inter,
        fontWeight: Font.Bold,
        fontSize: 20,
        lineHeight: 21 / 20,
    },
    IH3: {
        fontFamily: inter,
        fontWeight: Font.Bold,
        fontSize: 17,
        lineHeight: 28 / 17,
    },
    ISubtitle1: {
        fontFamily: inter,
        fontWeight: Font.SemiBold,
        fontSize: 30,
        lineHeight: 28 / 30,
    },
    ISubtitle2: {
        fontFamily: inter,
        fontWeight: Font.SemiBold,
        fontSize: 17,
        lineHeight: 21 / 17,
    },
    ISubtitle3: {
        fontFamily: inter,
        fontWeight: Font.SemiBold,
        fontSize: 13,
        lineHeight: 21 / 13,
    },
    IBody1: {
        fontFamily: inter,
        fontWeight: Font.Medium,
        fontSize: 19,
        lineHeight: 28 / 19,
    },
    IBody2: {
        fontFamily: inter,
        fontWeight: Font.Regular,
        fontSize: 16,
        lineHeight: 28 / 16,
    },
};
