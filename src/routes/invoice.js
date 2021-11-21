import {useParams} from "react-router-dom"
import { getInvoice } from "../data";

export default function Invoice() {
    let params = useParams();

    //changing string to int for imput function to find what is needed
    let invoice = getInvoice(parseInt(params.invoiceId), 10)
    console.log(invoice)
    
    return <main style={{padding: "1rem"}} >
        <h2> Total Due: {invoice.amount} </h2>
        <p>
            {invoice.name} : {invoice.number}
        </p>
    </main>
}