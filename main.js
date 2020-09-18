// Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },

   ];

   const idades = usuarios.map(item => {
        return item.idade;
   });

   console.log(idades);
  
   