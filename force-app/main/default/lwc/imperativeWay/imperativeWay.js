import { LightningElement } from 'lwc';
import getaccount1 from '@salesforce/apex/getAccounts.getAccount';

export default class ImperativeWay extends LightningElement {
    recs1;
    handleCLick() {
        getaccount1().then(result => {
            this.recs1 = result;
        }).catch(error => {
            console.error('Error fetching accounts:', error);
            this.acc1 = undefined; // Clear the account data on error
            
        }
        );
    }

}