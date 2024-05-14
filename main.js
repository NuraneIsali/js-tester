let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let widths = document.getElementById("en");
let heights = document.getElementById("uzunluq");
btn1.addEventListener("click", Perimeter);
function Perimeter() {
  let width = Number(widths.value);
  let height = Number(heights.value);
  let perimeter = 2 * (width + height);
  document.getElementById("netice").innerHTML =
    "Düzbucaqlının perimetri: " + perimeter;
    widths.value = "";
    heights.value = "";
    
}


btn2.addEventListener("click", Area);
function Area() {
    let width = Number(widths.value);
    let height = Number(heights.value);
  let area = width * height;
  document.getElementById("netice").innerHTML = "Düzbucaqlının sahəsi: " + area;
  widths.value = "";
  heights.value = "";
  
};

