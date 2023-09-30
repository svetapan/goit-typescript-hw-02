/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  HTURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: DaysOfWeek): boolean {
  if (day === DaysOfWeek.SATURDAY || day === DaysOfWeek.SUNDAY) {
    console.log("It is rest day");
    return true;
  } else {
    console.log("It is work day");
    return false;
  }
}

isWeekend(DaysOfWeek.SATURDAY);
isWeekend(DaysOfWeek.FRIDAY);
