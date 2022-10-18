import { useState, useEffect } from "react"
import Axios from "axios"

export default function IDK(){

    useEffect(() => {
        Axios.get("http://localhost:3001/getUsers").then((response) => {
            setListOfUsers(response.data)
        })
        Axios.get("http://localhost:3001/getOrders").then((response) => {
            setListOfOrders(response.data)
        })
        Axios.get("http://localhost:3001/getProducts").then((response) => {
            setListOfProducts(response.data)
        })
    }, []);

    //Users
    const [listOfUsers, setListOfUsers] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [username, setUsername] = useState("");
    const [sID, setSId] = useState("");
    const [password, setPassword] = useState("");
    const [gl, setGl] = useState("");
    const [email, setEmail] = useState("");

    const createUser = () => {
        Axios.post("http://13.52.253.222:3000/createUser", {
            name, age, username, email, password, sID, gl
        }).then((response) => {
            setListOfUsers([...listOfUsers,  {
                name, age, username, email, password, sID, gl
            }])
        })

        Axios.post("http://localhost:3001/createUser", {
            name, age, username, email, password, sID, gl
        }).then((response) => {
            setListOfUsers([...listOfUsers,  {
                name, age, username, email, password, sID, gl
            }])
        })
    }

    //Orders
    const [listOfOrders, setListOfOrders] = useState("");
    const [OrderNumber, setOrderNumber] = useState("");
    const [OrderTime, setOrderTime] = useState("");
    const [NumOfItems, setNumOfItems] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [UserPhoneNum, setUserPhoneNum] = useState("");
    const [UserAddress, setUserAddress] = useState("");
    const [UserSI, setUserSI] = useState("");
    const [UserName, setUN] = useState("");

    const createOrder = () => {
        Axios.post("http://localhost:3001/createOrder", {
            OrderNumber, OrderTime, NumOfItems, UserEmail, UserPhoneNum, UserAddress, UserSI, UserName
        }).then((response) => {
            setListOfOrders([...listOfOrders,  {
                OrderNumber, OrderTime, NumOfItems, UserEmail, UserPhoneNum, UserAddress, UserSI, UserName
            }])
        })
    }

    //Products
    const [listOfProducts, setListOfProducts] = useState("");
    const [ProductID, setProductID] = useState("");
    const [ProductTime, setProductTime] = useState("");
    const [ProductDescription, setProductDescription] = useState("");
    const [ProducTransactionID, setProducTransactionID] = useState("");
    const [MaxProducts, setMaxProducts] = useState("");
    const [ProductImage, setProductImage] = useState("");

    const createProduct = () => {
        Axios.post("http://localhost:3001/createProduct", {
            ProductID, ProductTime, ProductDescription, ProducTransactionID, MaxProducts, ProductImage
        }).then((response) => {
            setListOfProducts([...listOfProducts,  {
                ProductID, ProductTime, ProductDescription, ProducTransactionID, MaxProducts, ProductImage            }])
        })
    }

    return (
        <div className="IDK">
            <div className="userDisplay"> 
                {listOfUsers.map((user) => {
                    return (
                        <div>
                            <h1>Name: {user.name}</h1>
                            <h1>Age: {user.age}</h1>
                            <h1>Username: {user.username}</h1>
                            <h1>Email: {user.email}</h1>
                            <h1>Grade Level: {user.gl}</h1>
                            <h1>Password: {user.password}</h1>
                            <h1>studentID: {user.sID}</h1>
                            <h1>--------------------------------</h1>
                        </div>
                    )
                })}
                {/* {listOfOrders.map((order) => {
                    return (
                        <div>
                            <h1>Name: {order.OrderNumber}</h1>
                            <h1>Age: {order.age}</h1>
                            <h1>Username: {order.username}</h1>
                            <h1>Email: {order.email}</h1>
                            <h1>Grade Level: {order.gl}</h1>
                            <h1>Password: {order.password}</h1>
                            <h1>studentID: {order.sID}</h1>
                            <h1>--------------------------------</h1>
                        </div>
                    )
                })} */}
            </div>

            <div>
                <input type="text" placeholder="Name..." onChange={(event) => {
                    setName(event.target.value);
                }}/>
                <input type="number" placeholder="Age..." onChange={(event) => {
                    setAge(event.target.value);
                }} />
                <input type="text" placeholder="Email..." onChange={(event) => {
                    setEmail(event.target.value);
                }}/>
                <input type="number" placeholder="StudentID..." onChange={(event) => {
                    setSId(event.target.value);
                }}/>
                <input type="text" placeholder="Password..." onChange={(event) => {
                    setPassword(event.target.value);
                }}/>
                <input type="text" placeholder="GradeLevel..." onChange={(event) => {
                    setGl(event.target.value);
                }}/>
                <input type="text" placeholder="UserName..." onChange={(event) => {
                    setUsername(event.target.value);
                }}/>
                
                <button onClick={createUser}>Create User </button>
                <h1>--------------------------------</h1>
            </div>

        
            
            <div>
                <input type="text" placeholder="OrderNumber..." onChange={(event) => {
                        setOrderNumber(event.target.value);
                }}/>
                <input type="date" placeholder="OrderTime..." onChange={(event) => {
                        setOrderTime(event.target.value);
                }}/>
                <input type="number" placeholder="NumOfItems..." onChange={(event) => {
                        setNumOfItems(event.target.value);
                }}/>
                <input type="text" placeholder="UserEmail..." onChange={(event) => {
                        setUserEmail(event.target.value);
                }}/>
                <input type="number" placeholder="UserPhoneNumber..." onChange={(event) => {
                        setUserPhoneNum(event.target.value);
                }}/>
                <input type="text" placeholder="UserAddress..." onChange={(event) => {
                        setUserAddress(event.target.value);
                }}/>
                <input type="text" placeholder="UserSpecialInstructions..." onChange={(event) => {
                        setUserSI(event.target.value);
                }}/>
                <input type="text" placeholder="UserName..." onChange={(event) => {
                        setUN(event.target.value);
                }}/>
                <button onClick={createOrder}>Create Order </button>
                <h1>--------------------------------</h1>
            </div>


            {/* <div className="productsDisplay">
                {listOfProducts.map((products) => {
                    return (
                        <div>
                            <h1>Product ID: {products.ProductID}</h1>
                            <h1>Product Time: {products.ProductTime}</h1>
                            <h1>Product Description: {products.ProductDescription}</h1>
                            <h1>Product Transaction ID: {products.ProducTransactionID}</h1>
                            <h1>Max Products: {products.MaxProducts}</h1>
                            <h1>Product Image: {products.ProductImage}</h1>
                        </div>
                    )
                })}
            </div> */}

            <div>
                <input type="number" placeholder="ProductID..." onChange={(event) => {
                        setProductID(event.target.value);
                }}/>
                <input type="date" placeholder="ProductTime..." onChange={(event) => {
                        setProductTime(event.target.value);
                }}/>
                <input type="text" placeholder="ProductDescription..." onChange={(event) => {
                        setProductDescription(event.target.value);
                }}/>
                <input type="number" placeholder="ProducTransactionID..." onChange={(event) => {
                        setProducTransactionID(event.target.value);
                }}/>
                <input type="number" placeholder="MaxProducts..." onChange={(event) => {
                        setMaxProducts(event.target.value);
                }}/>
                <h1 type="image" placeholder="MaxProducts..." onChange={(event) => {
                        setProductImage(event.target.value);
                }}> </h1>
                <button onClick={createProduct}>Create Product </button>
                <h1>--------------------------------</h1>
            </div>
        </div>
    )
}