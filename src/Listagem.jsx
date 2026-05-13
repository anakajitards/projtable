import './Listagem.css'
import { useState } from 'react'


export default function Listagem() {

    return (
        <main>
             <h1>Listagem</h1>

        <table border="1">
            <thead>
            <tr>
                <td>Nome</td>
                <td>Email</td>
                <td>Login</td>
                <td>Editar</td>
                <td>Excluir</td>
            </tr>
            </thead>

            <tr>
                <td>Fernanda</td>
                <td>fernandalm@gmail.com</td>
                <td>nandalm</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Olivia</td>
                <td>oliviasilva@gmail.com</td>
                <td>oliviasx</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Ana Clara</td>
                <td>kajitinha@gmail.com</td>
                <td>anakajs</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Maria Eduarda</td>
                <td>mariaduda@gmail.com</td>
                <td>mariduds</td>
                <td>📝</td>
                <td>🗑️</td>

            </tr>

        </table>
        </main>
    )
}