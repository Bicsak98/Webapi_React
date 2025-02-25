import React, {useState, useEffect, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './NavBar_Admin'

const CRUD = ()=>{
    const empdata = [
        {
            id : 1,
            name : "Bence",
            age: 27,
            isActive : 1
        },
        {
            id : 2,
            name : "Ádám",
            age: 17,
            isActive : 1
        },
        {
            id : 3,
            name : "Csaba",
            age: 37,
            isActive : 1
        },
    ]

    const[data, setData] = useState([]);

    useEffect(()=> {
        setData(empdata);
    }, [])

    return(
        <Fragment>
            <NavBar></NavBar>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>IsActive</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ?
                            data.map((item, index)=> {
                                return(
                                    <tr key={index}>
                                        <td>{index+ 1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.isActive}</td>
                                    </tr>
                                )
                            })
                            :
                            'Loading...'
                    }
                    
                </tbody>
            </Table>
        </Fragment>
    );
}



export default CRUD;