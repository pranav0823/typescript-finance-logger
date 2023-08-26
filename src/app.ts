import { Invoice } from './classes/Invoice.js';
import { Payments } from './classes/Payments.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form')!;
console.log(form.children);
// inputs
// const type = document.querySelector('#type')!;
// const tofrom = document.querySelector('#tofrom')!;
// const details = document.querySelector('#details')!;
// const amount = document.querySelector('#amount')!;

const typeElement: HTMLInputElement = document.getElementById('type') as HTMLInputElement;
const tofromElement: HTMLInputElement = document.getElementById('tofrom') as HTMLInputElement;
const detailsElement: HTMLInputElement = document.getElementById('details') as HTMLInputElement;
const amountElement: HTMLInputElement = document.getElementById('amount') as HTMLInputElement;


// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (typeElement.value === 'invoice') {
      doc = new Invoice(tofromElement.value, detailsElement.value, amountElement.valueAsNumber);
  } else {
      doc = new Payments(tofromElement.value, detailsElement.value, amountElement.valueAsNumber);
  }
  
  list.render(doc, typeElement.value, 'end');
});
