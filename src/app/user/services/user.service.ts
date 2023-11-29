import { Injectable } from '@angular/core';
import { UserSaveDto } from '../model/UserSaveDto';
import { UserDto } from '../model/UserDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }



  save(userSaveDto: UserSaveDto): UserDto {
    // exemplo
    const UserDto: UserDto = {
      id: 1,
      name: userSaveDto.name,
      email: userSaveDto.email,
      birthDate: new Date(userSaveDto.birthDate) // Converta a string de data para um objeto Date
    };

    console.log("aqui o que chegou na service: " + JSON.stringify(UserDto));
    console.log("formato da data: " + userSaveDto.birthDate.toISOString.toString);

    return UserDto;

  }
}
