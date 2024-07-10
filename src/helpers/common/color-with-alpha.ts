export function colorWithAlpha(color: string, alpha: number): string {
    const { r, g, b } = hexToRgb(color);
    return `rgba(${r},${g},${b},${alpha})`;
}

function hexToRgb(color: string) {
    color = color.replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        function (_, r, g, b) {
            return r + r + g + g + b + b;
        },
    );
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    if (!result) {
        return {
            r: 0,
            g: 0,
            b: 0,
        };
    }
    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
    };
}
