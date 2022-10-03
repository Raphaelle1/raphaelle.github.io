//const codingLanguages = ["HTML"];
const codingLanguages = ["HTML", "CSS", "JavaScript"];
//const codingLanguages = ["HTML","CSS","JavaScript","Python","Java","C++"];

const elementLength = codingLanguages.length;
if (elementLength == 1) {
  document.getElementById('sentence').innerHTML = codingLanguages[0];
} else {
  let several = "";
  for (i = 0; i < elementLength - 1; i++) {
    several = several + codingLanguages[i];
    if (i != elementLength - 2) {
      several += ", ";
    }
  }
  several = several + " and " + codingLanguages[elementLength - 1] + ".";
  document.getElementById('sentence').innerHTML = several;
}
