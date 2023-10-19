import axios from 'axios';
import { useFormik } from 'formik'
import * as Yup from 'yup';

export default function FormikYup() {

    const addSupplierValidationSchema = Yup.object().shape({
        name: Yup.string().required("Name boş bırakılmaz"),
        unitPrice: Yup.number().required("Unit Price boş bırakılmaz"),
        stock: Yup.number().required("Stock boş bırakılmaz").when('isBig', {
            is: true,
            then: (schema) => schema.min(0),
            otherwise: (schema) => schema.min(0),
        }),

        quantitiyPerUnit: Yup.string().required("Quantitiy per Unit boş bırakılmaz"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
            unitPrice: "",
            stock: "",
            quantitiyPerUnit: ""
        },
        validationSchema: addSupplierValidationSchema,
        onSubmit: (values) => {
            axios.post("/products", values)
                .then(() => console.log("Başarılı post"))
        }
    })


    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input type='text' name='name' onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name ? <p style={{ color: 'red' }}>{formik.errors.name}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Unit Price</label>
                <input type='number' name='unitPrice' onChange={formik.handleChange} value={formik.values.unitPrice} />
                {formik.errors.unitPrice ? <p style={{ color: 'red' }}>{formik.errors.unitPrice}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Stock</label>
                <input type='number' name='stock' onChange={formik.handleChange} value={formik.values.stock} />
                {formik.errors.stock ? <p style={{ color: 'red' }}>{formik.errors.stock}</p> : <></>}
            </div>
            <div>
                <label htmlFor="">Quantity Per Unit</label>
                <input type='text' name='quantitiyPerUnit' onChange={formik.handleChange} value={formik.values.quantitiyPerUnit} />
                {formik.errors.quantitiyPerUnit ? <p style={{ color: 'red' }}>{formik.errors.quantitiyPerUnit}</p> : <></>}
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    )
}