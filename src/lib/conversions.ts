export const letterGrades = {
  'A+ (12, 4.0)': 12, 'A (11, 3.9)': 11, 'A- (10, 3.7)': 10, 'B+ (9, 3.3)': 9, 'B (8, 3.0)': 8, 'B- (7, 2.7)': 7, 'C+ (6, 2.3)': 6, 'C (5, 2.0)': 5, 'C- (4, 1.7)': 4, 'D+ (3, 1.3)': 3, 'D (2, 1.0)': 2, 'D- (1, 0.7)': 1, 'F (0)': 0
};
export const twelve = ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];
export const four = ['4.0', '3.9', '3.7', '3.3', '3.0', '2.7', '2.3', '2.0', '1.7', '1.3', '1.0', '0.7', '0'];
export const letters = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];

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

export function letterToPercent(letter: string): number {
  switch (letter) {
    case 'F':
      return 49;
    case 'D-':
      return 50;
    case 'D':
      return 53;
    case 'D+':
      return 57;
    case 'C-':
      return 60;
    case 'C':
      return 63;
    case 'C+':
      return 67;
    case 'B-':
      return 70;
    case 'B':
      return 73;
    case 'B+':
      return 77;
    case 'A-':
      return 80;
    case 'A':
      return 85;
    case 'A+':
      return 90;
    default:
      return 0;
  }
}
