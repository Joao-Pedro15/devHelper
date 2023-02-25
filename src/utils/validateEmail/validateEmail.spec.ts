import { validateEmail } from './validateEmail'

describe('Validação de email', () => {
    it('deve retornar verdadeiro para um email válido', () => {
      expect(validateEmail('exemplo@dominio.com')).toBe(true);
    });
  
    it('deve retornar falso para um email inválido sem "@"', () => {
      expect(validateEmail('exemplo.com')).toBe(false);
    });
  
    it('deve retornar falso para um email inválido sem dominio', () => {
      expect(validateEmail('exemplo@')).toBe(false);
    });
  
    it('deve retornar falso para um email inválido sem domínio e "@"', () => {
      expect(validateEmail('exemplo.com')).toBe(false);
    });
  });