const button= document.querySelectorAll('.button');
const body= document.querySelector('body');

button.forEach( (button) =>{
  console.log(button)
  button.addEventListener('click', (f) => {
    switch (f.target.id) {
      case 'grey':
          body.style.backgroundColor = f.target.id
          break;
      case 'yellow':
          body.style.backgroundColor = f.target.id
          break;
      case 'blue':
          body.style.backgroundColor = f.target.id
          break;
      case 'white':
          body.style.backgroundColor = f.target.id
          break;
      default:
          break;
  }
  })
});