import { LightningElement,track,wire } from 'lwc';
import getAccount1 from '@salesforce/apex/getAccounts.getAccount';
const columns = [
    { label: 'Name', fieldName: 'firstName' },
    { label: 'Industry', fieldName: 'Industry' },
    { label: 'Phone', fieldName: 'Phone' },
];

export default class Example1 extends LightningElement {
    @track somerecs;
    columns = columns;
  @wire (getAccount1)
  recordsList({ error, data }) {
    if (data) {
      this.somerecs = data;
      console.log('Data received:', this.records);
    } else if (error) {
      console.error('Error fetching data:', error);
    }
  }
}