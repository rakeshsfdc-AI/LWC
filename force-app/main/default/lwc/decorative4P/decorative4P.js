import { LightningElement } from 'lwc';

export default class Decorative4P extends LightningElement {
    handleClick() {
    var childComp = this.template.querySelector('c-decorative4-c');
    childComp.shouldbecallfromparent();
    }
}