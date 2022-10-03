const GITHUB_URL = "https://api.github.com/users/Raphaelle1";

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const img = document.createElement("img");
    const profileImage = document.getElementById("profile-image");
    img.src = data.avatar_url;
    img.alt = 'Profile picture';
    img.style.width = '180px';
    img.style.height = '170px';
    img.style.borderRadius = '50px';
    profileImage.appendChild(img);
  })
fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileName = document.getElementById("profile-name");
    profileName.src = data.name;
    profileName.innerHTML = profileName.src;
    profileName.style.fontSize = '28px';
    profileName.style.fontWeight = 'bold';
  })

let myDiv = document.querySelector('div');
myDiv.addEventListener('mouseover', () => {
  myDiv.style.backgroundColor = '#E17372';
});
myDiv.addEventListener('mouseleave', () => {
  myDiv.style.backgroundColor = null;
});

document.getElementById("move").onclick = function () {
  this.classList.add("animated");
}