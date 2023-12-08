import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment.dev';
import { Page } from 'src/app/shared/model/page/page';

import { UserDto } from '../model/user-dto';
import { UserListDto } from '../model/user-list-dto';
import { UserSaveDto } from '../model/user-save-dto';
import { UserUpdateDto } from '../model/user-update-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  private endpoint = 'users';


  save(userDto: UserSaveDto): Observable<UserDto> {
    const url = `${environment.baseUrl}/${this.endpoint}`;
    return this.http.post<UserDto>(url, userDto);
  }

  list(pageNumber = 0, pageSize = 10, sort = "id"): Observable<Page<UserListDto>> {
    const url = `${environment.baseUrl}/${this.endpoint}?page=${pageNumber}&size=${pageSize}&sort=${sort}`;
    return this.http.get<Page<UserListDto>>(url);
  }

  findById(userId: number): Observable<UserDto> {
    const url = `${environment.baseUrl}/${this.endpoint}/${userId}`;
    return this.http.get<UserDto>(url);
  }

  update(userId: number, userDto: UserUpdateDto): Observable<UserDto> {
    const url = `${environment.baseUrl}/${this.endpoint}/${userId}`;
    return this.http.put<UserDto>(url, userDto);
  }

  // tem que ter esse retorno pq da pra tratar erros
  delete(userId: number): Observable<UserDto> {
    const url = `${environment.baseUrl}/${this.endpoint}/${userId}`;
    return this.http.delete<UserDto>(url);
  }
}
