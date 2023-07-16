export function isTokenValid(token: string): boolean {
  if (typeof token !== 'string') {
    // Se o token não foi fornecido, consideramos inválido
    return false;
  }

  try {
    // Decodifica o token para obter as informações dele
    const decodedToken = JSON.parse(atob(token.split('.')[1]));

    // Verifica a data de expiração do token
    const expirationTime = decodedToken.exp * 1000; // Convertendo para milissegundos
    const currentTime = Date.now();

    if (currentTime < expirationTime) {
      // Se o tempo atual for menor que a data de expiração, o token é válido
      return true;
    } else {
      // Caso contrário, o token expirou e é inválido
      return false;
    }
  } catch (error) {
    // Em caso de erro ao decodificar o token, consideramos inválido
    return false;
  }
}
