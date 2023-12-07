import { Injectable } from '@angular/core';
const jwt = require('jsonwebtoken');

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  public validateToken(token: string, publicKey: string): boolean {
    try {
      const decodedToken: any = jwt.verify(token, publicKey);
      // Adicione lógica de validação adicional aqui, se necessário
      return true;
    } catch (error) {
      console.error('Erro ao verificar o token:', error);
      return false;
    }
  }

}
