import React, {useEffect, useState} from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alerta } from '../../functions';
import { Button } from '../Button';



const ShowProducts = () => {
    const url='http://api-products.run';
    const [products, setProducts] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [operation, setOperation] = useState(1);
    const [price, setPrice] = useState('');
    const [title, setTitle] = useState('');

    useEffect( () =>{
        getProducts();
    }, []);

    const getProducts = async () => {
        const respuesta = await axios.get(url);
        setProducts(respuesta.data);
    }

    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-md-4 offset-md-4">
                        <div className="d-grid mx-auto">
                            <Button className='btn btn-dark' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                <i className="fa-solid fa-circle-plus"></i>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>PRODUCTO</th>
                                        <th>DESCRIPCIÓN</th>
                                        <th>PRECIO</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    { products ( (product,i)=> (
                                        <tr key={product.id}>
                                            <td>{(i+1)}</td>
                                            <td>{product.name}</td>
                                            <td>{product.description}</td>
                                            <td>${new Intl.NumberFormat('es-mx').format(product.price)}</td>
                                            <td>
                                                <Button className='btn btn-warning'>
                                                    <i className="fa-solid fa-edit"></i>
                                                </Button>
                                                &nbsp;
                                                <Button className="btn btn-danger">
                                                    <i className="fa-solid fa-trash"></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade">
                
            </div>
        </div>
    )
}

export { ShowProducts }