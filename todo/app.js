let ul = document.querySelector('ul');
let enter = document.querySelector('.enter');
let input = document.querySelector('.input');
let filter = document.querySelector('.filter');




enter.addEventListener('submit', e => {
  
  e.preventDefault();
  if (input.value) {
    let li = document.createElement('li');
    let button = document.createElement('button');
    let span =document.createElement('span');
    ul.append(li);
    li.append(span);
    span.textContent = input.value.trim();
    enter.reset();
    li.append(button);
    button.textContent = 'delete';
    button.classList.add('button');
    e.stopPropagation();

    button.addEventListener('click', e => {
      e.target.parentElement.remove();
    
      

    
      });  

      li.addEventListener('click',e =>{
        e.target.style.textDecoration ='line-through';
    });
  }

});
filter.addEventListener('keyup', e => {
   e.preventDefault();

  let inputFilter = e.target.value.trim();

  Array.from(ul.children)
  .filter(li => !li.textContent.includes(inputFilter))
 .forEach(li => li.classList.add('hide'));
 
  Array.from(ul.children)
  .filter(li => li.textContent.includes(inputFilter))
  .forEach(li => li.classList.remove('hide'));
 

}

);

