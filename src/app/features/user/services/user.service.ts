import { Injectable } from '@angular/core';
import { UserSaveDto } from '../model/user-save-dto';
import { UserDto } from '../model/user-dto';



@Injectable({
  providedIn: 'root'
})
export class UserService {


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
