const CalculateAge = (birthDay, birthMonth, birthYear) => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; // adding 1 to make it 1-indexed
    const currentYear = today.getFullYear();

    let ageInYears = currentYear - birthYear;
    let ageInMonths = currentMonth - birthMonth;
    let ageInDays = currentDay - birthDay;

    // Adjust for birth month and day
    if (ageInMonths < 0 || (ageInMonths === 0 && ageInDays < 0)) {
        ageInYears--;
        ageInMonths = (ageInMonths + 12) % 12;
    }

    if (ageInDays < 0) {
        ageInMonths--;
        const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        ageInDays += daysInLastMonth;
    }

    return {
        years: ageInYears,
        months: ageInMonths,
        days: ageInDays,
    };
};

export default CalculateAge;
