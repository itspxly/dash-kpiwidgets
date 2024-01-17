const pretifyNumber = (number: number, precision: number = 1): string => {
    const abbreviations: string[] = ['', 'K', 'M', 'B', 'T'];
    const absNumber: number = Math.abs(number);

    const abbreviationIndex: number = Math.min(
        Math.floor((absNumber > 1 ? Math.log10(absNumber) : 0) / 3), 
        abbreviations.length - 1);
    const abbreviatedNumber: number = absNumber / Math.pow(1000, abbreviationIndex);
    const cappedPrecision: number = Math.max(precision, 0);

    const sign: number = (absNumber < Math.pow(10, -(cappedPrecision + 1))) ? 1 : Math.sign(number);
    return (sign * abbreviatedNumber).toFixed(cappedPrecision) + abbreviations[abbreviationIndex];
};

export default pretifyNumber;


