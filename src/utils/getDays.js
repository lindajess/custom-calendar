export function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

export function firstDayOfMonth(month, year) {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const day = new Date(year + "-" + month + "-01").getDay();

    return day
}