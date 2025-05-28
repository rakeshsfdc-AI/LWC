import { LightningElement ,track,api} from 'lwc';

export default class Decorative2 extends LightningElement {
    @track trackproperty = 'track Value';
    @api apiproperty = 'api Value';
    commonProperty = 'common Value';
    changeTrackProperty(){
        this.trackproperty = 'track Value changed';
        this.apiproperty = 'track Value changed';
        this.commonProperty = 'common Value changed';
    }
}