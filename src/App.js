import './App.css';
import React from 'react';
import Heading from './component/Heading'
import Table from './component/Table'
import * as data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import Form from './component/Form'





class App extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			todoList: data.todoList
		}
		this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
	
	}


  onDelete(index){
    const { todoList } = this.state;
      this.setState({ todoList: todoList.filter((todo, i)=> {
        return i !== index;
      }) });
  }
  onAdd(content) {
		let todoList = this.state.todoList;
		todoList.push(content);
		this.setState({ todoList });
	}


    render() {
      return(
        
        <div className="App">
        <Container container>
        <Heading title="Todo List"/>
        <Table data={this.state.todoList} onDelete={this.onDelete}/>
        
        </Container>
        <Container>
        <Form onSubmit={this.onAdd}/>
        </Container>
      </div>
      );
      
    }
}



export default App;
