const students = [
    { id: 12, name: 'Omar Sani' },
    { id: 31, name: 'Maaannnaaaa' },
    { id: 41, name: 'Moyouri' },
    { id: 71, name: 'deepjol' }
];
// let studentsName = []
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const name = element.name
//     studentsName.push(name);
// }
// console.log(studentsName);

const names = students.map(s => s.name);
const ids = students.map(s => s.id)
const bigger = students.find(s => s.id > 40);
console.log(bigger)