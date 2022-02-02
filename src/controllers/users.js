const knex = require('../connection');
const bcrypt = require('bcrypt');

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
  
    if (!nome) {
      return res.status(404).json({ mensagem: "O campo nome é obrigatório" });
    }
  
    if (!email) {
      return res.status(404).json({ mensagem: "O campo email é obrigatório" });
    }
  
    if (!senha) {
      return res.status(404).json({ mensagem: "O campo senha é obrigatório" });
    }
  
    try {
      const quantidadeUsuarios = await knex("usuarios").where({ email }).first();
      if (quantidadeUsuarios) {
        return res.status(400).json({ mensagem: "Já existe usuário cadastrado com esse email." });
      }
  
      const senhaCriptografada = await bcrypt.hash(senha, 10);
  
      const usuario = await knex("usuarios")
        .insert({ nome, email, senha: senhaCriptografada })
        .returning("*");
  
      if (!usuario) {
        return res.status(400).json({mensagem: "O usuário não foi cadastrado."});
      }
  
      return res.status(200).json({mensagem: "usuario cadastrado com sucesso!"});
    } catch (error) {
      return res.status(400).json(error.message);
    }
  };
  

module.exports = {
    cadastrarUsuario
}