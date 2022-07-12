const arr = [
  { "-N0oSIesUDo9W8TuFiTa": { value: "b", id: 1 } },
  { "-N0oSI7o-sFRb37IvAsY": { value: "a", id: 0 } },
  { "-N0oSI7o-sFRb37IvAsz": { value: "a", id: 5 } },
]
const data = [
  { value: "b", id: 1 },
  { value: "b", id: 5 },
  { value: "a", id: 0 },
]

data.map(item => {
  console.log(item.id)
  arr.map(itm => {
    console.log(Object.values(itm)[0].id)
    if (Object.values(itm)[0].id === item.id) {
      item.key = Object.keys(itm)[0]
    }
  })
})

console.log(data)

let merged = arr.map((item, index) => {
  data.forEach(item2 => {
    if (item.id === item2.id) {
      item = Object.assign(item, item2)
    }
  })
  return item
})

console.log(data)

// const letters = [
//   ["A", "B", "C", "D", "E"],
//   ["F", "G", "H", "I", "J"],
//   ["K", "L", "M", "N", "O"],
//   ["P", "Q", "R", "S", "T"],
//   ["U", "V", "W", "X", "Y", "Z"],
// ];

// letters.map((item) => {
//   console.log(item);
// console.log(item.includes("Y"))
// if (item.includes("Y")) {
//   console.log("$");
// }else{console.log("#");}
// console.log(item.indexOf("Y"));
// });

const str = "is2 Thi1s T4est 3a"
