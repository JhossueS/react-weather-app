const parserStringDate = (stringDate) => {
  const newFormat = stringDate.replace('-', ',').replace('-', ',');
  return newFormat;
};

const formattedDateToUse = (date) => {
  const dateMonthFormat = new Intl.DateTimeFormat('en', {
    month: 'short',
  });

  const dateDayFormat = new Intl.DateTimeFormat('en', {
    day: '2-digit',
  });

  const dateWeekdayFormat = new Intl.DateTimeFormat('en', {
    weekday: 'short',
  });

  const dateFormat = `${dateWeekdayFormat.format(date)}, ${dateDayFormat.format(date)} ${dateMonthFormat.format(date)}`;
  return dateFormat;
};

export default function dateFormat(date) {
  const formattedDate = new Date(parserStringDate(date));

  const todayDate = Date.now();
  const date2 = new Date(formattedDate);

  const daysMilliseconds = 86400000;
  const diffMillisenconds = date2 - todayDate;
  const diffindays = Math.round(diffMillisenconds / daysMilliseconds);

  if (diffindays === 1) {

    return 'Tomorrow';
  }

  return formattedDateToUse(formattedDate);

}
