import { Subject } from "rxjs";
import * as _ from 'lodash';

export class baseFunction {
    public static unDestroy(_unsubscribe: Subject<any>){
        if(_unsubscribe){
            _unsubscribe.next();
            _unsubscribe.complete();
            _unsubscribe.unsubscribe();
        }
    } 
    public static IsNullOrEmpty(value: string){
        return _.isNull(value) || _.isEmpty(value);
    }

    public static ConverParamUrl(object: any = {}){
        if(Object.keys(object).length <=0){
            return '';
        }
        else{
            let param ='';
            for (const property in object) {
                param += `&${property}=${object[property]}`;
            }
            param.replace("&","?");
            return param.replace("&","?");          
        }
    }
}
