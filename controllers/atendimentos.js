module.exports = app => {
  app.get('/atendimentos', (req,res) => res.send('Você está na rota de atendimento, fazendo um GET'));
  
  app.post('/atendimentos', (req,res) => {
    console.log(req.body);
    res.send('Você está na rota de atendimento, fazendo um POST');
  });
} 
