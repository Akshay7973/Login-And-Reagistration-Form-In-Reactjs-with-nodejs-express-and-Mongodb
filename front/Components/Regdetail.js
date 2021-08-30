
import React, { Component } from 'react'
import axios from "axios"
import { Link,} from "react-router-dom"
// import { useHistory } from 'react-router-dom';

 class Regdetail extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
            user: []
           
        }  
    }
    // routeChange=()=> {
    //     let path = `newPath`;
    //     let history = useHistory();
    //     history.push(path);
    //   }
    //   handleClick() {
    //     this.props.history.push('https://www.google.co.in/maps/@16.8470224,74.5881703,14z');
    //   }
    
    raiseInvoiceClicked(){
        const url = 'https://www.google.co.in/maps';
        window.open(url, '_blank');
    }
    
          componentDidMount() {
        axios
            .get('http://localhost:8000/getuser')
            .then(res => {
                //  console.log("Print-showBookDetails-API-response: ", res);
                this.setState({
                    user: res.data   
                })
            })
            .catch(err => {
                console.log("Error from ShowUserDetails");
            })
    };
    
    render() {
        const user = this.state.user;
        
        return (
            <div className="ShowBookDetails">
                <div className="container">
                    <div className="row">
                        <Link to="/" className="btn btn-warning float-center" style={{ marginTop: "20px" }}>
                            Register
              </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">User Record</h1>

                    </div>
                </div>
                <div className="row m-0">
                    <table className="table table-hover table-faint">
                        <thead>
                            <tr >

                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {user.map((item,index) => (
                            
                                <tr key={index}onClick={this.raiseInvoiceClicked} >
                                  
                                    <td>{item.username}</td>
                                    <td >{item.email}</td>
                                    <td>{item.password}</td>
                                   
                                </tr>
                               
                            ))}

                        </tbody>
                      
                    </table>
                </div>
             
          </div>
            
        )
    }
}

export default Regdetail
