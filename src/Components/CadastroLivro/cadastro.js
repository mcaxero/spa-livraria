import React, { Component } from 'react';
import Input from './cadastroCustomizado'
import $ from 'jquery';

class Cadastro extends Component {

  constructor() {
    super();    
    this.state = {data : [],titulo:'',ano:'', paginas:'',resumo:'',nota:''};
    this.enviaForm = this.enviaForm.bind(this);
    this.setTitulo = this.setTitulo.bind(this);
    this.setAno = this.setAno.bind(this);
    this.setPaginas = this.setPaginas.bind(this);
    this.setResumo = this.setResumo.bind(this);
    this.setNota = this.setNota.bind(this);
    
  }

    componentDidMount(){  
    $.ajax({
        url:"http://localhost:3000/adicionarlivro",
        dataType: 'json',
        success:function(resposta){    
          this.setState({data:resposta});
        }.bind(this)
      } 
    );          
  }

  //cadastrando os dados do livro
  enviaForm(evento){
    evento.preventDefault();    
    $.ajax({
      url:'http://localhost:3000/adicionarlivro',
      contentType:'application/json',
      dataType:'json',
      type:'post',
      data: JSON.stringify({
        titulo:this.state.titulo,
        ano:this.state.ano,
        paginas:this.state.paginas,
        resumo:this.state.resumo,
        nota:this.state.nota
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

  setTitulo(evento){
    this.setState({titulo:evento.target.value});
  }

  setAno(evento){
    this.setState({ano:evento.target.value});
  }  

  setPaginas(evento){
    this.setState({paginas:evento.target.value});
  }

  setResumo(evento){
    this.setState({resumo:evento.target.value});
  }

  setNota(evento){
    this.setState({nota:evento.target.value});
  }

  setId_autor(evento){
    this.setState({id_autor:evento.target.value});
  }


  //formulário de cadastro
    render() {
        return (
            <div className="container-fluid registro">
              <h2 className="h2 text-center">Adicionar Livro</h2>
              <form onSubmit={this.enviaForm.bind(this)} method="post">
                   <div class="col col-md-4">
                        <Input id="capa" type="file" name="capa"/>
                    </div>
                  <Input id="titulo" type="text" name="titulo" value={this.state.titulo} onChange={this.setTitulo} label="Titulo"/>                                              
                  <Input id="ano" type="date" name="ano" value={this.state.ano} onChange={this.setAno} label="Ano"/>                                              
                  <Input id="paginas" type="text" name="paginas" value={this.state.paginas} onChange={this.setPaginas} label="Paginas"/> 
                  <Input id="resumo" type="text" name="resumo" value={this.state.resumo} onChange={this.setResumo} label="Resumo"/> 
                  <Input id="nota" type="text" name="nota" value={this.state.nota} onChange={this.setNota} label="Nota"/> 
                  

              <button type="button" class="btn btn-secondary btn-lg disabled">Cancelar</button>
              <button type="submit" class="btn btn-primary btn-lg">Salvar</button>
              </form>
              </div>
  


      );
    }
  }


export default Cadastro;