import { LightningElement ,track, wire} from 'lwc';
import getaccount1 from '@salesforce/apex/getAccounts.getAccount';

export default class WireWireWIthMethod extends LightningElement {
    recs1;
    @wire (getaccount1)
    funct1({data, error}) {
        if (data) {
            this.recs1 = data;
        } else if (error) {
            console.error('Error fetching accounts:', error);
        }

    }
}