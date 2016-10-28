'use strict';
import { app } from './../app';

export class valueService{
    constructor(private $http: ng.IHttpService){
      
    }
    value(){
      return this.$http.get("./json/systemValue.json");
    }
}
// export default angular.module("valueService",[])
export default 
app.service("valueService",valueService);

