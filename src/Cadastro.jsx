import React from "react";
import "./App.css";
import imagem from "./assets/snaplogo.jpeg";

export default function Cadastro() {
  return (
    <div className="container">

      <div className="left">
        <img
          src={imagem}
          alt="Tela snap"
        />
      </div>

      <div className="right">
        <div className="login-box">

          <h2>Snapchat</h2>

          <p>Criar conta</p>

          <label>Nome</label>
          <input type="text" placeholder="Digite seu nome" />

          <label>E-mail</label>
          <input type="email" placeholder="Digite seu e-mail" />

          <label>Login</label>
          <input type="text" placeholder="Crie um login" />

          <label>Senha</label>
          <input type="password" placeholder="Crie uma senha" />

          <label>Confirmar senha</label>
          <input type="password" placeholder="Confirme sua senha" />

          <button>CADASTRAR</button>

          <a href="/">
            Já possui conta? Entrar
          </a>

        </div>
      </div>

    </div>
  );
}