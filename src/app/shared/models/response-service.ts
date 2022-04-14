import { StatusCode } from "../enumaration/status-code";

export enum StatusResponse  {
    success  = 'success',
    false = 'false'
}

export class ResponseService{
    code? : StatusCode;
    data? : any;
    message? : MessageResponseService;
    version? : string;
}

export class MessageResponseService{
    duration? : number;
    id? : number;
    show? : true;
    status? : StatusResponse;
    text? : string;
}