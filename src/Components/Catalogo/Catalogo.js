import React, { Component } from 'react';
import $ from 'jquery';


class Catalogo extends Component {

  constructor() {
    super();    
    this.state = {data : []}
  }
  //recuperando lista da api
    componentDidMount(){  
    $.ajax({
        url:"http://localhost:3000/todosAutor",
        dataType: 'json',
        success:function(resposta){
          this.setState({data:resposta});
        }.bind(this)
      } 
    );          
  }
  
  //listando os autores inscritos
  render(){
      return(
        <div class="list-group">
          {
            this.state.data.map(function(autor){
              return (
                <button type="button" class="list-group-item list-group-item-action">{autor.nome}</button>
              );
            })
          }
        </div>
      );
  }
}
export default Catalogo

