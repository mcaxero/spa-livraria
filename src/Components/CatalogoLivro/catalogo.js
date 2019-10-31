import React, { Component } from 'react';
import $ from 'jquery';

class CatalogoLivro extends Component {

  constructor() {
    super();    
    this.state = {data : []}
  }
  //recuperando lista da api
    componentDidMount(){  
    $.ajax({
        url:"http://localhost:3000/todosLivro",
        dataType: 'json',
        success:function(resposta){
          this.setState({data:resposta});
        }.bind(this)
      } 
    );          
  }
  //listando os livros inscritos
  render(){
      return(
        <table class="table table-sm table-dark">
          <thead>
            <tr>
              <th scope="col">Livro</th>
              <th scope="col">Nota</th>
            </tr>
          </thead>
          
          <tbody>
            {
              this.state.data.map(function(livro){
                return (
                  <tr key={livro.id}>
                      <td>{livro.titulo}</td>
                      <td>{livro.nota}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        
      );
  }
}
export default CatalogoLivro