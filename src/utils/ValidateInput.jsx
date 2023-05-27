const ValidateInput = (date) => {
    const { day, month, year } = date;
    let isError = false;
    let errors = { day: '', month: '', year: '' };

    // Validate day
    if (!day) {
        isError = true;
        errors.day = 'This field is required';
    } else if (day < 1 || day > 31) {
        isError = true;
        errors.day = 'Must be a valid day';
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

    return { isError, errors };
};

export default ValidateInput;
