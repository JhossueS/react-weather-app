import { celsiusToFahrenheit, fahrenheitToCelsius } from './changeGrades';

//receives a state and type grade to change
export default function updateGrades(state, gradeChange) {
  // true change fahrenheit to celsius

  if (gradeChange) {
    //update the_temp today
    const gradeToday = fahrenheitToCelsius(state.dataToday.the_temp);
    const updateGradeToday = ({
      ...state.dataToday,
      the_temp: gradeToday,
    });

    //update max_temp, min_temp to celsius
    const dataWeek = [...state.dataWeekDays];
    const updateGradesWeek = dataWeek.map((item) => {
      const updateGradeMaxTemp = fahrenheitToCelsius(item.max_temp);
      const updateGradeMinTemp = fahrenheitToCelsius(item.min_temp);

      const gradesUpdated = ({
        ...item,
        max_temp: updateGradeMaxTemp,
        min_temp: updateGradeMinTemp,
      });

      return gradesUpdated;
    });

    return { updateGradeToday, updateGradesWeek };
  }

  const gradeToday = celsiusToFahrenheit(state.dataToday.the_temp);
  const updateGradeToday = ({
    ...state.dataToday,
    the_temp: gradeToday,
  });

  const dataWeek = [...state.dataWeekDays];
  const updateGradesWeek = dataWeek.map((item) => {
    const updateGradeMaxTemp = celsiusToFahrenheit(item.max_temp);
    const updateGradeMinTemp = celsiusToFahrenheit(item.min_temp);

    const gradesUpdated = ({
      ...item,
      max_temp: updateGradeMaxTemp,
      min_temp: updateGradeMinTemp,
    });

    return gradesUpdated;
  });

  return { updateGradeToday, updateGradesWeek };

}
