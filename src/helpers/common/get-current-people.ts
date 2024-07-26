import { numberWithCommas } from '../format/number-with-commas';

export function getCurrentPeople(): string {
    const from = new Date(2024, 6, 21, 8).getTime();
    const now = new Date().getTime();
    return numberWithCommas(Math.floor((now - from) / (1000 * 60 * 5)));
}
