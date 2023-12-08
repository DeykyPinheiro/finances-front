import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public validateToken(token: string): boolean {
    try {
      // const decodedToken: any = jwt_decode.jwtDecode.(token, publicKey);
      return jwt_decode.jwtDecode(token);
      // Adicione lógica de validação adicional aqui, se necessário
      // return true;
    } catch (error) {
      console.error('Erro ao verificar o token:', error);
      return false;
    }
  }

}
