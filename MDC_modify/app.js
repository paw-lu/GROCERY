import {MDCSelect} from '@material/select';
import {MDCTextField} from '@material/textfield';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
import {MDCRipple} from '@material/ripple';


const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));
new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));


const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));

const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));

formField.input = checkbox;

//const select = new MDCSelect(document.querySelector('.mdc-select'));
//select.listen('change', () => {
//  alert(`Selected option at index ${select.selectedIndex} with value "${select.value}"`);
//});


// new MDCRipple(document.querySelector('.mdc-checkbox');
// new MDCRipple(document.querySelector('.mdc-fab'));

new MDCSelect(document.querySelector('.crane-select'));





const timeForm = document.querySelector('#time-form');

timeForm.addEventListener('submit', (evt) => {
  //evt.preventDefault();
  //alert('Success!');
});
