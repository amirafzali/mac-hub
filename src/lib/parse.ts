const pdf = require('pdf-parse');
const fs = require('fs');

const dataBuffer = fs.readFileSync(`${__dirname}/Transcript.pdf`);

const toRemove = ['Course\n', 'Title\n', 'Attm./Earned Units\n', 'Grade\n', 'Term Enrolment\n'];
const gradesMatch = /(0|3|4|6|9).00\/(3|4|6|9).00\n?(A|B|C|D|F)(\+?|-?)\n/g;

const weightMap = { 3: 3, 6: 6, 9: 9 };
const gradeMap = {
  'A+': 12, A: 11, 'A-': 10, 'B+': 9, B: 8, 'B-': 7, 'C+': 6, C: 5, 'C-': 4, 'D+': 3, D: 2, 'D-': 1, F: 0
};
const fourPoint = {
  12: 4.0, 11: 3.9, 10: 3.7, 9: 3.3, 8: 3.0, 7: 2.7, 6: 2.3, 5: 2.0, 4: 1.7, 3: 1.3, 2: 1.0, 1: 0.7, 0: 0
};

function calculateGPA(grades, four) {
  let totalWeight = 0;
  let totalGrade = 0;

  grades.forEach((grade) => {
    let use = grade[0];
    if (four) use = fourPoint[use];
    totalGrade += use * grade[1];
    totalWeight += grade[1];
  });

  console.log(totalGrade / totalWeight);
}

async function parsePDF() {
  const data: {text: string} = await pdf(dataBuffer);
  let { text } = data;

  toRemove.forEach((key) => { text = text.split(key).join(''); });

  let matches = text.match(gradesMatch);

  if (!matches) return;

  const grades: [number, number][] = [];
  matches = matches.map((g) => g.split('\n').join(''));

  matches.forEach((g) => {
    const achievedPart = g.charAt(0);
    const weightPart = g.charAt(5);
    const gradePart = g.substring(9);
    if (!achievedPart || !weightMap[weightPart] || !gradeMap[gradePart]) return;

    grades.push([gradeMap[gradePart], weightMap[weightPart]]);
  });
  console.log(grades);
  calculateGPA(grades, false);
  calculateGPA(grades, true);
}

parsePDF();
