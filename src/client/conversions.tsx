export const letterGrades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];

export function numberToPercent(grade: number): number {
  switch (grade) {
    case 0:
      return 49;
    case 1:
      return 50;
    case 2:
      return 53;
    case 3:
      return 57;
    case 4:
      return 60;
    case 5:
      return 63;
    case 6:
      return 67;
    case 7:
      return 70;
    case 8:
      return 73;
    case 9:
      return 77;
    case 10:
      return 80;
    case 11:
      return 85;
    case 12:
      return 90;
    default:
      return 0;
  }
}
export function percentToNumber(grade: number): number {
  if (grade < 50) {
    return 0;
  }
  if (grade < 53) {
    return 1;
  }
  if (grade < 57) {
    return 2;
  }
  if (grade < 60) {
    return 3;
  }
  if (grade < 63) {
    return 4;
  }
  if (grade < 67) {
    return 5;
  }
  if (grade < 70) {
    return 6;
  }
  if (grade < 73) {
    return 7;
  }
  if (grade < 77) {
    return 8;
  }
  if (grade < 80) {
    return 9;
  }
  if (grade < 85) {
    return 10;
  }
  if (grade < 90) {
    return 11;
  }

  return 12;
}
export function percentToLetter(grade: number): string {
  if (grade < 50) {
    return 'F';
  }
  if (grade < 53) {
    return 'D-';
  }
  if (grade < 57) {
    return 'D';
  }
  if (grade < 60) {
    return 'D+';
  }
  if (grade < 63) {
    return 'C-';
  }
  if (grade < 67) {
    return 'C';
  }
  if (grade < 70) {
    return 'C+';
  }
  if (grade < 73) {
    return 'B-';
  }
  if (grade < 77) {
    return 'B';
  }
  if (grade < 80) {
    return 'B+';
  }
  if (grade < 85) {
    return 'A-';
  }
  if (grade < 90) {
    return 'A';
  }

  return 'A+';
}
