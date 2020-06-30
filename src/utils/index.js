const DAYS_NAME = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const MONTHS_NAME = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

export function firstDayOfMonth(month, year) {
    return new Date(year + "-" + month + "-01").getDay();

}

export function getMonthName(month) {
    return MONTHS_NAME[month]
}

export function getDayName(day) {
    return DAYS_NAME[day]
}