import { useState } from "react";
import { useEffect } from "react";
import { axiosApi } from "./axiosApi";

export default function SuppliersApi() {
    const [companies, setCustomer] = useState([]);
    const [sortedCustomers, setSortedCustomers] = useState(companies)

    useEffect(() => {
        axiosApi
            .get("/suppliers")
            .then((response) => {
                return response?.data;
            })
            .then((data) => {
                setCustomer(data);
                setSortedCustomers(data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function handleSort(e) {
        if (e.target.value === "A-Z") {
            const sorted = [...sortedCustomers].sort((a, b) => a.companyName.charCodeAt(0) - b.companyName.charCodeAt(0))
            setSortedCustomers(sorted)
        } else if (e.target.value === "Z-A") {
            const sorted = [...sortedCustomers].sort((a, b) => b.companyName.charCodeAt(0) - a.companyName.charCodeAt(0))
            setSortedCustomers(sorted)
        } else if (e.target.value === "default") {
            setSortedCustomers([...companies])
        }
    }

    const handleDelete = (id) => {
        setSortedCustomers(companies?.filter(item => item.id !== id))
        axiosApi
            .delete(`/suppliers/${id}`)
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
        <h1>Length: {sortedCustomers?.length} </h1>
        <select onChange={handleSort}>
            <option value="default" >Sort by alphabetic</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>

        <table style={{ borderCollapse: "collapse", margin: "auto", width: "100%", border: "1px solid gray" }}>
            <thead style={{ border: "1px solid gray" }} >
                <tr >
                    <th style={{ padding: "1.2rem" }}>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th>Address</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody >
                {
                    sortedCustomers?.map(company =>
                        <tr key={company.id}>
                            <td style={{ padding: "1.2rem" }}>{company.id}</td>
                            <td>{company.companyName}</td>
                            <td>{company.contactName}</td>
                            <td>{company.contactTitle}</td>
                            <td>
                                <div>{company.address.street}</div>
                                <div>{company.address.city}</div>
                                <div>{company.address.country}</div>
                                <div>{company.address.phone}</div>
                            </td>
                            <td>
                                <button style={{ backgroundColor: "#EA2027", color: "white", border: "1px solid #b33939" }} onClick={() => handleDelete(company.id)}>DELETE</button>
                            </td>
                        </tr>
                    )
                }

            </tbody>
        </table>


    </div>);
}
