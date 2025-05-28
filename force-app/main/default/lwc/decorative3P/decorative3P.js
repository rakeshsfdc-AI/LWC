import { LightningElement ,track} from 'lwc';

export default class Decorative3P extends LightningElement {
   @track prop ='value';
    handleClick() {
        this.prop = 'Decorative3P';
    }
}