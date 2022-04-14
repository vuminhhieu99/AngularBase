import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ModuleData } from '../../resource_data/module/module';
import { HttpService } from '../http/http.service';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor(private http: HttpService) { }
  
  get(): Observable<any>{
    
    return of(ModuleData).pipe(delay(100));
  }
}
