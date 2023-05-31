//  forma de importa padrão no node mais antiga que o import 

const fs = require('fs') // nome do modulo igual a variavel fs file system 

fs.readFile('arquivo.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(err);
    }
        console.log(data);
    
});