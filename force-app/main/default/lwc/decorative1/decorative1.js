import { LightningElement ,track} from 'lwc';

export default class Decorative1 extends LightningElement {
    @track value = 'option1';
    handleChange(){
            this.value = 'value got changed';
    }
}