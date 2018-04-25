export default (): string => {
    let i: number;
    let random: number;
    let uuid: string = '';

    for (i = 0; i < 32; i++) {
        random = (Math.random() * 16) | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            uuid += '-';
        }
        // tslint-disable-next-line
        uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(
            16,
        );
    }

    return uuid;
};
