import AbstractView from "./AbstractView";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Dashboard");
    }
    async getHtml(){
        this.murkup=`

        
        
        
        `
        return this.murkup;
    }
}