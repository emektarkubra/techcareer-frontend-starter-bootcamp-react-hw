import { useState } from "react";
import { useEffect } from "react";
import { axiosApi } from "./axiosApi";

export default function OrdersApi() {
    const [orders, setOrders] = useState([]);    

    useEffect(() => {
        axiosApi
            .get("/orders")
            .then((response) => {
                return response?.data;
            })
            .then((data) => {
                setOrders(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const handleDelete = (id) => {
        setOrders(orders?.filter(item => item.id !== id))
        axiosApi
            .delete(`/orders/${id}`)
            .then((response) => {
                return response?.data;
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (<div style={{ padding: "1rem 2rem" }}>
        <h1>Length: {orders?.length} </h1>

        <table style={{ borderCollapse: "collapse", margin: "auto", width: "100%", border: "1px solid gray" }}>
            <thead style={{ border: "1px solid gray" }}>
                <tr>
                    <th style={{ padding: "1.2rem" }}>id</th>
                    <th>orderDate</th>
                    <th>shipName</th>
                    <th>shipAddress</th>
                </tr>
            </thead>
            <tbody >
                {
                    orders?.map(order =>
                        <tr key={order.id}>
                            <td style={{ padding: "1.2rem" }}>{order.id}</td>
                            <td>{order.orderDate.slice(0,10).split("-").reverse().join("/")}</td>
                            <td>{order.shipName}</td>
                            <td>
                                <div>{order.shipAddress.street}</div>
                                <div>{order.shipAddress.city}</div>
                                <div>{order.shipAddress.postalCode}</div>
                                <div>{order.shipAddress.country}</div>
                            </td>
                            <td>
                                <button style={{ backgroundColor: "#EA2027", color: "white", border: "1px solid #b33939" }} onClick={() => handleDelete(order.id)}>DELETE</button>
                            </td>
                        </tr>
                    )
                }

            </tbody>
        </table>


    </div>);
}
