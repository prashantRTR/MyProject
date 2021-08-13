import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { render } from '@testing-library/react';
import { IconButton } from '@material-ui/core';



const useStyles = makeStyles({
  table: {
    maxWidth: 859,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function TodoList() {
  const classes = useStyles();

  const[todoData,setTodoData] = useState([]);
  const[todoID,setTododId] = useState([]);
  const[title,setTitle] = useState([]);
  const[status,setStatus] = useState([]);
  const[action,setAction] = useState([]);


async function  getData (){
 
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => {
        console.log(res.data);
        setTodoData(res.data.slice(0,20));
      //  setTododId(res.data.id);
      //  setTitle(res.data.title);
      //  setStatus(res.data.completed);
       // setAction(res.data.completed);
     

    }).catch((error)=>{

        console.log(error);
    })

}





  useEffect(()=>{

  console.log('Hello');
 
    getData();


 
  },[])

  
 
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
        
            <TableCell align="left"><IconButton style ={{size:'10px'}}>TODO ID</IconButton></TableCell>
            <TableCell align="left">TITLE&nbsp;</TableCell>
            <TableCell align="left">STATUS&nbsp;</TableCell>
            <TableCell align="left">ACTION&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todoData.map((row) => (
            <TableRow key={row.userId}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.completed===true?'completed':'incomplete'}</TableCell>
              < TableCell align="left"> <button>VIEW
                  </button> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
