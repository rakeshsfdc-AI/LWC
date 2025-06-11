import { LightningElement,track } from 'lwc';
import recordsMethod from '@salesforce/apex/getRecords.methodName';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

const columns = [
    { label: 'CaseNumber', fieldName: 'CaseNumber' },
    { label: 'Status', fieldName: 'Status' },
    { label: 'Priority', fieldName: 'Priority' },
];

export default class Example2 extends LightningElement {
    @track inputValue = 'New';
    @track recs;
     columns = columns;
    handleNameChange(event){
        this.inputValue = event.target.value;
    }
    handleSubmit(){
        recordsMethod({inputval:this.inputValue}).then(result => {
            this.recs = result;
            if(result){
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Records fetched successfully',
                        variant: 'success',
                    })
                );

            }
        }).catch(error => {
            console.error('Error fetching records:', error);
        });
    }
}