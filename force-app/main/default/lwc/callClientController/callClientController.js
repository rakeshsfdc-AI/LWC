import { LightningElement } from 'lwc';

export default class CallClientController extends LightningElement {
    value ="firstvalue";
    handleClick(){
        alert('This is a client-side controller action.');
    }
    handleSearch(event){
        alert('button is clicked'+ event.target.label);
    }
    handleSearch1(event){
        alert('button is clicked'+ event.target.label);
    }
}