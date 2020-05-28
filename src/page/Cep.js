import React from 'react';

import './style.css'

export default function Cep() {

    return(
        <div>
            <div className="header">
                <p className="author">By: <a href="https://github.com/natansantoss" target="_blank" rel="noopener noreferrer">Natan.Santos</a></p>
            </div>

            <div className="page">
                <div className="valor">
                    <p>Insira o número do CEP no campo abaixo</p>
                    <input type="number" placeholder="00000-000" />
                    <button>Pesquisar</button>
                </div>

                <div className="end">
                    <p className="info">Endereço correspondente ao CEP: 00000-000</p>

                    <p>Logradouro: aasdasdasdasdasdasdasd</p>
                    <p>Bairro: aasdasdasdasdasdasdasd</p>
                    <p>Cidade: aasdasdasdasdasdasdasd</p>
                    <p>UF: </p>
                
                </div>
            </div>
        </div>
    )
}