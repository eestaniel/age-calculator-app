const ValidateInput = (date) => {
    const {day, month, year} = date;

    let errors = {day: '', month: '', year: ''};
    let isError = false;

    //take into account in month has 28 days, 30 days, or 31 days
    // if library, check if valid leap year for 29 days

    if (!day) {
        isError = true;
        errors.day = 'This field is required';
    } else if ( day < 1 || day > 31) {
        isError = true;
        errors.day = 'Must be a valid day';
    } else if ([4, 6, 9, 11].includes(Number(month)) && day > 30) {
        isError = true;
        errors.day = 'Must be a valid day';
    } else if (month === 2) {
        // check if valid leap year for 29 days
        if (((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && day > 29) {
            isError = true;
            errors.day = 'Must be a valid day';
        } else if (day > 28) {
            isError = true;
            errors.day = 'Must be a valid day';
        }
    }

    // Validate month
    if (!month) {
        isError = true;
        errors.month = 'This field is required';
    } else if (month < 1 || month > 12) {
        isError = true;
        errors.month = 'Must be a valid month';
    }

    // Validate year
    if (!year) {
        isError = true;
        errors.year = 'This field is required';
    } else if (year > new Date().getFullYear()) {
        isError = true;
        errors.year = 'Must be in the past';
    } else if (year < 1900) {
        isError = true;
        errors.year = 'Must be in the future';
    }

    return {isError, errors};
};

export default ValidateInput;
