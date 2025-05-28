import { LightningElement ,track,api } from 'lwc';

export default class Decorative4C extends LightningElement {
@track property1 = 'Decorative4C';
    @api shouldbecallfromparent() {
        this.property1 = 'Decorative4C after change';
    }
}