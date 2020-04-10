let nomeArquivo = 'NotaFiscal';
let conteudoNome = 'Fulano';
let conteudoSobrenome = 'de Tal';
let conteudoSalario = 1983.37;

let conteudoTextoJSON = '{';

    conteudoTextoJSON += '"nome": "' + conteudoNome + '",';
    conteudoTextoJSON += '"sobreNome": "' + conteudoSobrenome + '",';
    conteudoTextoJSON += '"salario": "' + conteudoSalario + '"';
    
conteudoTextoJSON += '}';

let blob = new Blob( [conteudoTextoJSON] , {type: "text/plain;charset=utf-8"} );
saveAs(blob,nomeArquivo+".json");