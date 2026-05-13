import React from "react";
import "./App.css";
import imagem from "./assets/snaplogo.jpeg";

export default function Login() {
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

          <p>Fazer login</p>

          <input type="text" placeholder="Digite seu login" />

          <input type="password" placeholder="Digite sua senha" />

          <a href="/listagem">
          <button>ENTRAR</button>
          </a>

          <a href="/cadastro">
            Não possui conta? Cadastre-se
          </a>

        </div>
      </div>

    </div>
  );
}