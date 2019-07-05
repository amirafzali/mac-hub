
const requiredAverage = (desiredGrade:number, desiredWeight:number, totalWeight:number, totalMarks:number) => {
  const mark: number = ((desiredGrade * totalWeight) - totalMarks) / desiredWeight;
  return mark;
};

export const getAverage = (total:number, weight:number) => total / weight;

export const getResults = (
  grades: number[], weights: number[], desiredGrade: number, desiredWeight: number
) => {
  let totalMarks = 0;
  for (let i = 0; i < grades.length; i++) {
    totalMarks += grades[i] * weights[i];
  }

  const currentWeight = weights.reduce((num1, num2) => num1 + num2);
  const totalWeight = currentWeight + desiredWeight;
  return { required: requiredAverage(desiredGrade, desiredWeight, totalWeight, totalMarks), average: getAverage(totalMarks, currentWeight) };
};
