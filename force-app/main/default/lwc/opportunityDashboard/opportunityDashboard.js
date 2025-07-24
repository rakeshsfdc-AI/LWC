import { LightningElement, api, wire  } from 'lwc';
import getOpportunityData from '@salesforce/apex/OpportunityDashboardController.getOpportunityData';

export default class OpportunityDashboard extends LightningElement {
        @api recordId;
    opportunity;
    error;

    @wire(getOpportunityData, { oppId: '$recordId' })
    wiredOpportunity({ error, data }) {
        if (data) {
            this.opportunity = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.opportunity = undefined;
        }
    }
}