import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationHome extends NavigationMixin(LightningElement) {
    handleClick(){
            this[NavigationMixin.Navigate]({
            type: 'standard__namePage',
            attributes: {
                pageName: 'home',
            },
        });
    }
    gotoChatter(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:'chattter',
            },
        });
    }
    gotoNewPage(){
        this[NavigationMixin.Navigate]({
              type:'standard__objectPage',
        attributes:{
            objectApiName:'Account',
            actionName:'new',
        },
        });
    }
}