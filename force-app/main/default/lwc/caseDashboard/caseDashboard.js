import { LightningElement ,wire, api, track} from 'lwc';
import getCasesFromDataBase from '@salesforce/apex/CaseDashboardController.getCases';

export default class CaseDashboard extends LightningElement {
    @track caseRec;
    @api recordId;
    errorVariable
    @wire(getCasesFromDataBase,{caseId :'$recordId'}) 
    getCasess({data,error}){
        if(data){
            this.caseRec = data;
            this.errorVariable = error;
        }
        else if(error){
            this.errorVariable = error;
        }
    }
}