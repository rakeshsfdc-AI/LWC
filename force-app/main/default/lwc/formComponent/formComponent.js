import { LightningElement } from 'lwc';

export default class FormComponent extends LightningElement {
    statusOptions = [
        { value: 'India', label: 'India', description: 'A new item' },
        {
            value: 'Isreal',
            label: 'Isreal',
            description: 'A new item',
        },
        {
            value: 'USA',
            label: 'USA',
            description: 'A new item',
        },
        {
            value: 'UK',
            label: 'UK',
            description: 'A new item',
        },
        
        
    ];

    value = 'India'; // default value

    handleChange(event) {
        // Get the string of the "value" attribute on the selected option
        this.value = event.detail.value;
    }
}