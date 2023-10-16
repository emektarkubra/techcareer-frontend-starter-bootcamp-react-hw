import { useState } from "react"

export default function BoxSize() {
    const [width, setWidth] = useState("200")
    const [heigth, setHeight] = useState("200")
    const [size, setSize] = useState([width, heigth])

    function handleChangeSize(e) {
        e.preventDefault()
        setSize([width, heigth])
    }
    return (
        <>
            <form onSubmit={handleChangeSize}>
                <input onChange={(e) => setWidth(e.target.value)} type="text" name="" id="" placeholder="Enter width" />
                <input onChange={(e) => setHeight(e.target.value)} type="text" name="" id="" placeholder="Enter higth" />
                <input type="submit" value="Change" />
            </form>

            <div style={{ border: "2px solid red", width: `${size[0]}px`, height: `${size[1]}px` }}>

            </div>

        </>
    )
}