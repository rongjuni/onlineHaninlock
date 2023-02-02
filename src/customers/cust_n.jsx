import "./cust_n.css"
import customerNData from "./cust_n_data";


const CustomerN = () => {
  return (
    <div >
      {customerNData.map((customerInfo) => {
        return (
          <div>
            <div>{customerInfo.companyEng}</div>
            <div>{customerInfo.descriptionEng}</div>
            <div>{customerInfo.contactPerson}</div>
            <div>{customerInfo.phoneNumber}</div>
            <div>{`${customerInfo.addressStreet} ${customerInfo.addressCity} ${customerInfo.addressState} ${customerInfo.addressZip}`}</div>
            <img src={customerInfo.image} alt="NuelExpress" className='customer-image' />     
          </div>
        )
       } )}
    </div>
  )
}


export default CustomerN;