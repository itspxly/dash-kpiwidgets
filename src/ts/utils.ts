const pretifyNumber = (number: number, precision: number = 1): string => {
    const abbreviations: string[] = ['', 'K', 'M', 'B', 'T'];
    const sign: number = Math.sign(number);
    const absNumber: number = Math.abs(number);
    const abbreviationIndex: number = Math.min(Math.floor(Math.log10(absNumber) / 3), abbreviations.length - 1);
    const abbreviatedNumber: number = absNumber / Math.pow(1000, abbreviationIndex);

    return (sign * abbreviatedNumber).toFixed(Math.max(precision, 0)) + abbreviations[abbreviationIndex];
};

export default pretifyNumber;
