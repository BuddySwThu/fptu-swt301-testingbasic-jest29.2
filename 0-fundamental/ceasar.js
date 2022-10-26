const ceaser = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                                        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const crypt = (str) => {
        let newString = '';

        str.split('').forEach((char) => {
            newString += letters[letters.indexOf(char) + 1];
        });

        return newString;
    };

    const decrypt = (str) => {
        let newString = '';

        str.split('').forEach((char) => {
            newString += letters[letters.indexOf(char) - 1];
        });

        return newString;
    };

    return {crypt, decrypt};
};

module.exports = ceaser;