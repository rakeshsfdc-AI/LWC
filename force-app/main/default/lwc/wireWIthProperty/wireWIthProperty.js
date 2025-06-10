import { LightningElement ,wire,track} from 'lwc';
import getaccount1 from '@salesforce/apex/getAccounts.getAccount';

export default class WireWIthProperty extends LightningElement {
   @track accounts;
    @wire (getaccount1) accounts;

}