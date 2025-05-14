const express = require('express');
const app = express();
const professoresRoutes = require('./routes/professoresRoutes');

app.use(express.json());
app.use('/professores', professoresRoutes);

const PORT = 3000;  
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
