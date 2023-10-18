import { useState } from "react";
import { useEffect } from "react";
import { axiosApi } from "./axiosApi";

export default function StateApi() {
    const [companies, setCompanies] = useState([]);
    const [sortedCompanies, setSortedCompanies] = useState(companies)

    useEffect(() => {
        axiosApi
            .get("/suppliers")
            .then((response) => {
                return response?.data;
            })
            .then((data) => {
                setCompanies(data);
                setSortedCompanies(data)
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    function handleSort(e) {
        if (e.target.value === "A-Z") {
            const sorted = [...sortedCompanies].sort((a, b) => a.companyName.charCodeAt(0) - b.companyName.charCodeAt(0))
            setSortedCompanies(sorted)
        } else if (e.target.value === "Z-A") {
            const sorted = [...sortedCompanies].sort((a, b) => b.companyName.charCodeAt(0) - a.companyName.charCodeAt(0))
            setSortedCompanies(sorted)
        } else if (e.target.value === "default") {
            setSortedCompanies([...companies])
        }
    }

    return (<>
        <h1>Length: {sortedCompanies?.length} </h1>
        <select onChange={handleSort}>
            <option value="default" >Sort by alphabetic</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
        </select>

        <table style={{ borderCollapse: "collapse" }}>
            <thead >
                <tr>
                    <th style={{ border: "1px solid" }}>Company Name</th>
                    <th style={{ border: "1px solid" }}>Contact Name</th>
                    <th style={{ border: "1px solid" }}>Contact Title</th>
                    <th style={{ border: "1px solid" }}>Address</th>
                </tr>
            </thead>
            <tbody >
                {
                    sortedCompanies?.map(company =>
                        <tr key={company.id}>
                            <td style={{ border: "1px solid" }}>{company.companyName}</td>
                            <td style={{ border: "1px solid" }}>{company.contactName}</td>
                            <td style={{ border: "1px solid" }}>{company.contactTitle}</td>
                            <td style={{ border: "1px solid" }}>
                                <div>{company.address.street}</div>
                                <div>{company.address.city}</div>
                                <div>{company.address.country}</div>
                                <div>{company.address.phone}</div>
                            </td>
                            <td style={{ border: "1px solid" }}>
                                <button style={{ backgroundColor: "#EA2027", color: "white", border: "1px solid #b33939" }} onClick={() => setSortedCompanies(companies?.filter(item => item.id !== company.id))}>DELETE</button>
                            </td>
                        </tr>
                    )
                }

            </tbody>
        </table>


    </>);
}
