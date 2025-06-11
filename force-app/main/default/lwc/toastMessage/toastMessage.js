import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastMessage extends LightningElement {
    showToast(){
            const event = new ShowToastEvent({
        title: 'Success',
        message: 'Success',
        variant: 'success',
        mode: 'dismissable'
    });
    this.dispatchEvent(event);
    }

    showToastError(){
           const event1 = new ShowToastEvent({
        title: 'Error',
        message: 'Error',
        variant: 'error',
        mode: 'dismissable'
    });
    this.dispatchEvent(event1);
    }

    showToastWarning(){
           const event1 = new ShowToastEvent({
        title: 'Warning',
        message: 'Warning',
        variant: 'Warning',
        mode: 'dismissable'
    });
    this.dispatchEvent(event1);
    }

    showToastInformation(){
           const event1 = new ShowToastEvent({
        title: 'Information',
        message: 'Information',
        variant: 'Information',
        mode: 'dismissable'
    });
    this.dispatchEvent(event1);
    }
    
}