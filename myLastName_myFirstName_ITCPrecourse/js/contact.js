let postBtn = document.querySelector('.submit');
let form = document.querySelector('.contact');
let inputs = [...form.querySelectorAll('.put')];

function validate() {
  let isIncomplete = inputs.some(input => !input.value);
  postBtn.disabled = isIncomplete;
  postBtn.style.cursor = isIncomplete ? 'not-allowed' : 'pointer';
}
form.addEventListener('input', validate);
validate();
