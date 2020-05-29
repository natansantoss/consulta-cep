import React from 'react';

import axios from 'axios';

import './style.css'

export default function Cep() {

    const consultarCep = async () => {

        const value = document.querySelector(".cep").value
        const api = `https://viacep.com.br/ws/${value}/json/`
        
        try{
            const response = await axios.get(api)
    
            var log = response.data.logradouro
            var bairro = response.data.bairro
            var localidade = response.data.localidade
            var uf = response.data.uf

            if (typeof(log) !== "string"){
                document.querySelector(".info").innerHTML = "CEP não encontrado, certifique-se que o valor foi digitado corretamente"
                document.querySelector(".log").innerHTML = ""
                document.querySelector(".bairro").innerHTML = ""
                document.querySelector(".cidade").innerHTML = ""
                document.querySelector(".uf").innerHTML = ""

            }else{

                document.querySelector(".info").innerHTML = `Endereço correspondente ao CEP: ${value}`
                document.querySelector(".log").innerHTML = `Logradouro: ${log}`
                document.querySelector(".bairro").innerHTML = `Bairro: ${bairro}`
                document.querySelector(".cidade").innerHTML = `Cidade: ${localidade}`
                document.querySelector(".uf").innerHTML = `UF: ${uf}`
            }

        }catch(error){
            const msg = "Não foi possivel encontrar o CEP, certifique-se que o valor foi digitado corretamente ou tente novamente mais tarde"

            document.querySelector(".info").innerHTML = msg
            document.querySelector(".log").innerHTML = `${error}`
            document.querySelector(".bairro").innerHTML = ""
            document.querySelector(".cidade").innerHTML = ""
            document.querySelector(".uf").innerHTML = ""
        }
    }


    return(
        <div>
            <div className="header">
                <p className="author">By: <a href="https://github.com/natansantoss" target="_blank" rel="noopener noreferrer">Natan.Santos</a></p>
            </div>

            <div className="page">
                <div className="valor">
                    <p>Insira o número do CEP no campo abaixo</p>
                    <input className="cep" type="number" placeholder="Insira somente números EX: 00000000" />
                    <button onClick={consultarCep}>Pesquisar</button>
                </div>

                    <div className="end">
                    <p className="info"></p>

                    <p className="log"></p>
                    <p className="bairro"></p>
                    <p className="cidade"></p>
                    <p className="uf"></p>
                
                </div>
            </div>
        </div>
    )
}