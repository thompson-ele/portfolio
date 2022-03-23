/**
 * Converts pixel value to rems
 * @param number pixelSize - number of pixels
 * @returns string - converted size in rem units
 */

const em = (pixelSize) => {
    const baseFontSize = 16;
    return `${pixelSize/baseFontSize}rem`;
}

export {
    em
}