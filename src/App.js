import './App.css';
import React from 'react';
import Heading from './component/Heading'
import Table from './component/Table'
import * as data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';





class App extends React.Component {
    render() {
      return(
        
        <div className="App">
        <Container container>
        <Heading title="Todo List"/>
        <Table data={data.todoList}/>
        
        </Container>
      </div>
      );
      
    }
}

export default App;
