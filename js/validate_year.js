const validate_year = (e) => {
        var invalidChars = ["-", "+", "e", "E"];
        var validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var validLength = 4;
        var inputLength = e.target.value.length;

        let inputValue = e.target.value + e.key;
        let year = Number(inputValue);
        if (inputValue.length >= 2 && !(inputValue.startsWith("19") || inputValue.startsWith("20") || inputValue.startsWith("21"))) {
            e.preventDefault();
            return;
        }
        if (inputValue.length === 4 && (year < 1900 || year > 2100)) {
            e.preventDefault();
            return;
        }

        if (inputLength >= validLength) {
            e.preventDefault();
            return;
        }
        if (invalidChars.includes(e.key) || !validChars.includes(e.key)) {
            e.preventDefault();
            return;
        }
    };
// regular function useCase => ^(19[0-9]{2}|20[0-9]{2}|2100)$
