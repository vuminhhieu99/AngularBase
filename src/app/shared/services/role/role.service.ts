import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseService } from '../../models/response-service';
import { HttpService, IRequestOptions } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {


  constructor(private httpService: HttpService) { }

  // GetAllRole(object: object ): Observable<ResponseService>{
  //   var params : IRequestOptions = {};
  //   params.params = object;
  //   return this.httpService.get('admin/roles' ,params);
  // }
}
