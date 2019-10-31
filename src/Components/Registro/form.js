import React, { Component } from 'react';
import './form.css'
import Input from './InputCustomizado'
import $ from 'jquery';

class Registro extends Component {

  constructor() {
    super();    
    this.state = {data : [],nome:'',dataNascimento:'', biografia:''};
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setDataNascimento = this.setDataNascimento.bind(this);
    this.setBiografia = this.setBiografia.bind(this);
  }
    //jogando dados para a api
    componentDidMount(){  
    $.ajax({
        url:"http://localhost:3000/adicionarautor",
        dataType: 'json',
        success:function(resposta){    
          this.setState({data:resposta});
        }.bind(this)
      } 
    );          
  }

  //função de envio dos inputs
  enviaForm(evento){
    evento.preventDefault();    
    $.ajax({
      url:'http://localhost:3000/adicionarautor',
      contentType:'application/json',
      dataType:'json',
      type:'post',
      data: JSON.stringify({
        nome:this.state.nome,
        dataNascimento:this.state.dataNascimento,
        biografia:this.state.biografia
      }),

      success:function(resposta){    
        this.setState({data:resposta});
        console.log("foooi");
      }.bind(this),

      error: function(resposta){
        console.log("erro");
      }      
    });
  }

  setNome(evento){
    this.setState({nome:evento.target.value});
  }

  setDataNascimento(evento){
    this.setState({dataNascimento:evento.target.value});
  }  

  setBiografia(evento){
    this.setState({biografia:evento.target.value});
  }


  //formulário de inscrição de autor
    render() {
        return (
            <div className="container-fluid registro">
              <h2 className="h2 text-center">Adicionar Autor</h2>

              <form onSubmit={this.enviaForm.bind(this)} method="post">
                  <Input id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome"/>                                              
                  <Input id="dataNascimento" type="date" name="dataNascimento" value={this.state.dataNascimento} onChange={this.setDataNascimento} label="Data de Nascimento"/>                                              
                  <Input id="biografia" type="text" name="biografia" value={this.state.biografia} onChange={this.setBiografia} label="Biografia"/>  
                  <button type="button" className="btn btn-secondary btn-lg disabled">Cancelar</button>
                  <button type="submit" className="btn btn-primary btn-lg">Salvar</button>
              </form>
              </div>
      );
    }
  }


export default Registro;