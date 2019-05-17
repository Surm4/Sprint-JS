const sprint = (function () {
    const variableStamp = "%v";
    const escapeCharacter = "%";
    const escapeStamp = escapeCharacter + variableStamp;
    const regexOptions = "g"
    const regex = new RegExp(variableStamp + "|" + escapeStamp, regexOptions);

    const sprintValidate = (replaceCount, variablesCount) => {
        if (variablesCount > replaceCount) {
            console.warn("Too many arguments.");
        } else if (variablesCount < replaceCount) {
            console.warn("Too few arguments.");
        }
    }

    const execute = (stringDeclaration, ...variablesPassed) => {
        const variablesCount = variablesPassed.length;
        const arrOfVariables = variablesPassed;
        let string = stringDeclaration;

        let i = 0;
        string = string.replace(regex, (character) => {
            if (character === escapeStamp) {
                return variableStamp;
            } else {
                return arrOfVariables[i++] || variableStamp;
            }
        });

        sprintValidate(i, variablesCount);
        return string;
    }

    return execute;
})();
