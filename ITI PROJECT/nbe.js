let arr = [
  "Day: 19/9/2023 => 11am ",
  "Day: 19/9/2023 => 2pm ",
  "Day: 21/9/2023 => 12pm ",
  "Day: 23/9/2023 => 10:30am ",
  "Day: 25/9/2023 => 1pm ",
  "Day: 25/9/2023 => 2pm ",
  "Day: 26/9/2023 => 11am ",
  "Day: 27/9/2023 => 11am ",
];

let targetdate = document.querySelector(".date");
let btn = document.querySelector(".btn");

let idx = 0;
function publishdate() {
  idx++;
  targetdate.innerHTML = arr[idx];
}

btn.addEventListener("click", () => {
  publishdate();
});
