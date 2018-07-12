import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
import {MDCRipple} from '@material/ripple';


const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));


const shopRipple = new MDCRipple(document.querySelector('.shop-nav'))
const insightsRipple = new MDCRipple(document.querySelector('.insights-nav'))
const aboutRipple = new MDCRipple(document.querySelector('.about-nav'))
const helpMeRipple = new MDCRipple(document.querySelector('.help-me-nav'))


const carrotcheckbox = new MDCCheckbox(document.querySelector('.carrot-check'));
const carrotformField = new MDCFormField(document.querySelector('.carrot-form'));
carrotformField.input = carrotcheckbox;

const anisecheckbox = new MDCCheckbox(document.querySelector('.anise-check'));
const aniseformField = new MDCFormField(document.querySelector('.anise-form'));
aniseformField.input = anisecheckbox;

const macronscheckbox = new MDCCheckbox(document.querySelector('.macrons-check'));
const macronsformField = new MDCFormField(document.querySelector('.macrons-form'));
macronsformField.input = macronscheckbox;

const baguettescheckbox = new MDCCheckbox(document.querySelector('.baguettes-check'));
const baguettesformField = new MDCFormField(document.querySelector('.baguettes-form'));
baguettesformField.input = baguettescheckbox;

const muffinscheckbox = new MDCCheckbox(document.querySelector('.muffins-check'));
const muffinsformField = new MDCFormField(document.querySelector('.muffins-form'));
muffinsformField.input = muffinscheckbox;

const toastcheckbox = new MDCCheckbox(document.querySelector('.toast-check'));
const toastformField = new MDCFormField(document.querySelector('.toast-form'));
toastformField.input = toastcheckbox;

const steakcheckbox = new MDCCheckbox(document.querySelector('.steak-check'));
const steakformField = new MDCFormField(document.querySelector('.steak-form'));
steakformField.input = steakcheckbox;

const raspberriescheckbox = new MDCCheckbox(document.querySelector('.raspberries-check'));
const raspberriesformField = new MDCFormField(document.querySelector('.raspberries-form'));
raspberriesformField.input = raspberriescheckbox;

const blueberriescheckbox = new MDCCheckbox(document.querySelector('.blueberries-check'));
const blueberriesformField = new MDCFormField(document.querySelector('.blueberries-form'));
blueberriesformField.input = blueberriescheckbox;

const doughnutscheckbox = new MDCCheckbox(document.querySelector('.doughnuts-check'));
const doughnutsformField = new MDCFormField(document.querySelector('.doughnuts-form'));
doughnutsformField.input = doughnutscheckbox;

const pancakescheckbox = new MDCCheckbox(document.querySelector('.pancakes-check'));
const pancakesformField = new MDCFormField(document.querySelector('.pancakes-form'));
pancakesformField.input = pancakescheckbox;

const saladscheckbox = new MDCCheckbox(document.querySelector('.salads-check'));
const saladsformField = new MDCFormField(document.querySelector('.salads-form'));
saladsformField.input = saladscheckbox;

const orangescheckbox = new MDCCheckbox(document.querySelector('.oranges-check'));
const orangesformField = new MDCFormField(document.querySelector('.oranges-form'));
orangesformField.input = orangescheckbox;

const onionscheckbox = new MDCCheckbox(document.querySelector('.onions-check'));
const onionsformField = new MDCFormField(document.querySelector('.onions-form'));
onionsformField.input = onionscheckbox;

const roastBeefCheckbox = new MDCCheckbox(document.querySelector('.roast-beef-check'));
const roastBeefFormField = new MDCFormField(document.querySelector('.roast-beef-form'));
roastBeefFormField.input = roastBeefCheckbox;

const churrosCheckbox = new MDCCheckbox(document.querySelector('.churros-check'));
const churrosFormField = new MDCFormField(document.querySelector('.churros-form'));
churrosFormField.input = churrosCheckbox;

const chiliPeppersCheckbox = new MDCCheckbox(document.querySelector('.chili-peppers-check'));
const chiliPeppersFormField = new MDCFormField(document.querySelector('.chili-peppers-form'));
chiliPeppersFormField.input = chiliPeppersCheckbox;

const salmonCheckbox = new MDCCheckbox(document.querySelector('.salmon-check'));
const salmonFormField = new MDCFormField(document.querySelector('.salmon-form'));
salmonFormField.input = salmonCheckbox;
