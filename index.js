const sheet_data = [
  {
    Date: 44840,
    'India-c': 612.7,
    'India-i': 5.59,
    'Us-c': 65.2,
    'Us-i': 8.46,
    'China-c': 398.5,
    'China-i': 2.67,
    'Uk-c': 220,
    'UK-i': 6.85,
    'Canada-c': 156,
    'Canada-i': 5.15,
  },
  {
    Date: 44828,
    'India-c': 793.4,
    'India-i': 3.88,
    'Us-c': 320.2,
    'Us-i': 1.16,
    'China-c': 500.2,
    'China-i': 12.75,
    'Uk-c': 311.4,
    'UK-i': 14.93,
    'Canada-c': 201.5,
    'Canada-i': 12.8,
  },
  {
    Date: 44814,
    'India-c': 300,
    'India-i': 5.59,
    'Us-c': 200,
    'Us-i': 4,
    'China-c': 700,
    'China-i': 6,
    'Uk-c': 600.32,
    'UK-i': 7.36,
    'Canada-c': 500,
    'Canada-i': 5.15,
  },
  {
    Date: 44800,
    'India-c': 200,
    'India-i': 2.63,
    'Us-c': 400,
    'Us-i': 7.3,
    'China-c': 300,
    'China-i': 3,
    'Uk-c': 900,
    'UK-i': 4.3,
    'Canada-c': 600,
    'Canada-i': 7.25,
  },
  {
    Date: 44786,
    'India-c': 100,
    'India-i': 1,
    'Us-c': 100,
    'Us-i': 3.2,
    'China-c': 200,
    'China-i': 7,
    'Uk-c': 100,
    'UK-i': 8.23,
    'Canada-c': 350,
    'Canada-i': 3.23,
  },
  {
    Date: 44772,
    'India-c': 500,
    'India-i': 4.2,
    'Us-c': 500,
    'Us-i': 5.2,
    'China-c': 400,
    'China-i': 5,
    'Uk-c': 450,
    'UK-i': 2.23,
    'Canada-c': 100,
    'Canada-i': 12.8,
  },
  {
    Date: 44758,
    'India-c': 650,
    'India-i': 5.59,
    'Us-c': 65.2,
    'Us-i': 7.6,
    'China-c': 398.5,
    'China-i': 2.67,
    'Uk-c': 750,
    'UK-i': 9.35,
    'Canada-c': 156,
    'Canada-i': 5.15,
  },
].slice(0, 6);
const datasets = [
  {
    label: 'India -c',
    data: [600, 100, 900],
    borderColor: 'red',
    backgroundColor: 'red',
    yAxisID: 'y',
  },
  {
    label: 'India -i',
    data: [2, 5, 3],
    borderColor: 'red',
    backgroundColor: 'red',
    yAxisID: 'y1',
    borderDash: [5, 5],
  },
  {
    label: 'Uk -c',
    data: [50, 500, 200],
    borderColor: 'blue',
    backgroundColor: 'blue',
    yAxisID: 'y',
  },
  {
    label: 'Uk -i',
    data: [6, 9, 2],
    borderColor: 'blue',
    backgroundColor: 'blue',
    yAxisID: 'y1',
    borderDash: [5, 5],
  },
  {
    label: 'Uk -c',
    data: [100, 700, 300],
    borderColor: 'pink',
    backgroundColor: 'pink',
    yAxisID: 'y',
  },
  {
    label: 'Uk -i',
    data: [4, 7, 2],
    borderColor: 'pink',
    backgroundColor: 'pink',
    yAxisID: 'y1',
    borderDash: [5, 5],
  },
];

const dataArray = [];
const valuesArray = [];
// console.log(JSON.stringify(sheet_data));
const data = sheet_data.reduce(
  (all_data, current_obj) => {
    return Object.keys(current_obj).reduce((data_temp, key) => {
      data_temp[key].push[current_obj[key]];
      return data_temp;
    }, all_data);
  },
  Object.keys(sheet_data[0]).reduce((all, key) => {
    all[key] = [];
    return all;
  }, {}),
);

console.log(JSON.stringify(data));
