const formatweekDays = (date) => {
    if (date) {
        let current_date = new Date();
        let store_date = new Date(date);
        let diffTime = Math.abs(current_date - store_date);
        let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        let diffWeeks = Math.floor(diffDays / 7);
        let diffDaysRemain = diffDays % 7;
        return `${diffWeeks} weeks ${diffDaysRemain} days`;
    }
};
