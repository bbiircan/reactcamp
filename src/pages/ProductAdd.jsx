import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup";
import { Button, FormField, Label } from 'semantic-ui-react'
import TobetoTextInput from '../utilities/customFormControls/TobetoTextInput';


export default function ProductAdd() {
    const initialValues = { title: "", price: 38 }
    const schema = Yup.object({
        title: Yup.string().required("Ürün adı zorunlu"),
        price: Yup.number().required("Ürün fiyatı zorunlu")
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                    <TobetoTextInput name='title' placeholder="Ürün Adı"/>
                    <TobetoTextInput name='price' placeholder="Ürün Fiyatı"/>
                    <Button color='purple' type='submit'>Add</Button>
                </Form>
            </Formik>
        </div>
    )
}



