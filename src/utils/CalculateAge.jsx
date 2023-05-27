const CalculateAge = (birthDay, birthMonth, birthYear) => {
    // calculate age in years, months, and days
    // take into account if birth month is greater than current month
    // take into account if birthday is greater than current day
    // take into account if month has 28 days, 30 days, or 31 days

    // get current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    // calculate age in years
    let ageInYears = currentYear - birthYear;
    if (currentMonth < birthMonth) {
        ageInYears--;
    }
    else if (currentMonth === birthMonth) {
        if (currentDay < birthDay) {
            ageInYears--;
        }
    }

    // calculate age in months
    let ageInMonths = currentMonth - birthMonth;
    if (currentDay < birthDay) {
        ageInMonths--;
    }
    if (ageInMonths < 0) {
        ageInMonths += 12;
    }

    // calculate age in days
    // take into account if month has 28 days, 30 days, or 31 days
    let ageInDays = currentDay - birthDay;
    if (ageInDays < 0) {
        if ([4, 6, 9, 11].includes(currentMonth)) {
            ageInDays += 30;
        }
        else if (currentMonth === 2) {
            ageInDays += 28;
        }
        else {
            ageInDays += 31;
        }
    }
    if (ageInMonths < 0) {
        ageInMonths += 12;
    }

    return {
        years: ageInYears,
        months: ageInMonths,
        days: ageInDays,
    };
};

export default CalculateAge;
