import express from 'express'; //importando a função express que existe no módulo express no node_modules
const app = express();// o parentese executa a função, executei a função express
//app = meu servidor
function RotaTeste(req, res){
    res.send('Olá mundo')   
} 

function RotaTeste2(req, res){
    let numero = 2
    res.send('Eu tenho ' + numero + ' anos de idade')
}
app.get('/', RotaTeste)//servidor está ouvindo a rota 'barra' e quando eu executar, ele chama a RotaTeste
app.get('/1', RotaTeste2)

app.listen(3000)//liga o servidor na porta que eu colocar, no caso, 3000 <-- porta

