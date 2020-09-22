
// 2.4 Unindo operações
// Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos:

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];


   const  calculo  =  usuarios
   .map(usuario =>({ ... usuario, idade: usuario.idade * 2}))
   .filter(usuario  => usuario.idade <= 50 );
 
 console.log(calculo);