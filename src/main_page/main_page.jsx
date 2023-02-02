/* eslint-disable */

import { useState } from "react";
import "./main_page.css"
import customerData_A from "../customers/cust_a_data";
import customerData_B from "../customers/cust_b_data";
import customerData_C from "../customers/cust_c_data";
import customerData_D from "../customers/cust_d_data";
import customerData_E from "../customers/cust_e_data";
import customerData_F from "../customers/cust_f_data";
import customerData_G from "../customers/cust_g_data";
import customerData_H from "../customers/cust_h_data";
import customerData_I from "../customers/cust_i_data";
import customerData_J from "../customers/cust_j_data";
import customerData_K from "../customers/cust_k_data";
import customerData_L from "../customers/cust_l_data";
import customerData_M from "../customers/cust_m_data";
import customerData_N from "../customers/cust_n_data";
import customerData_O from "../customers/cust_o_data";
import customerData_P from "../customers/cust_p_data";
import customerData_Q from "../customers/cust_q_data";
import customerData_R from "../customers/cust_r_data";
import customerData_S from "../customers/cust_s_data";
import customerData_T from "../customers/cust_t_data";
import customerData_U from "../customers/cust_u_data";
import customerData_V from "../customers/cust_v_data";
import customerData_W from "../customers/cust_w_data";
import customerData_X from "../customers/cust_x_data";
import customerData_Y from "../customers/cust_y_data";
import customerData_Z from "../customers/cust_z_data";


const CustomerN = () => {
  
  let custA = customerData_A
  let custB = customerData_B
  let custC = customerData_C
  let custD = customerData_D
  let custE = customerData_E
  let custF = customerData_F
  let custG = customerData_G
  let custH = customerData_H
  let custI = customerData_I
  let custJ = customerData_J
  let custK = customerData_K
  let custL = customerData_L
  let custM = customerData_M
  let custN = customerData_N
  let custO = customerData_O
  let custP = customerData_P
  let custQ = customerData_Q
  let custR = customerData_R
  let custS = customerData_S
  let custT = customerData_T
  let custU = customerData_U
  let custV = customerData_V
  let custW = customerData_W
  let custX = customerData_X
  let custY = customerData_Y
  let custZ = customerData_Z
  
  let [allCustomers, setAllcustomers] = useState([...custA, ...custB, ...custC, ...custD, ...custE, ...custF, ...custG, ...custH,
    ...custI, ...custJ, ...custK, ...custL, ...custM, ...custN, ...custO, ...custP, ...custQ, ...custR,
  ...custS, ...custT, ...custU, ...custV, ...custW, ...custX, ...custY, ...custZ])


  let orderCustomers = allCustomers.sort((a, b) => a.companyEng - b.companyEng);

  return (
    <div >
      {allCustomers.map((customerInfo, i) => {
        return (
          <div key={i}>
            <a href={customerInfo.website}><img src={customerInfo.image} alt="NuelExpress" className='customer-image' /></a>
            <div>{`${customerInfo.companyEng} ${customerInfo.companyKor}`}</div>
            <div>{customerInfo.descriptionEng}</div>
            <div>{customerInfo.contactPerson}</div>
            <div>{customerInfo.phoneNumber}</div>
            <div>{`${customerInfo.addressStreet} ${customerInfo.addressCity} ${customerInfo.addressState} ${customerInfo.addressZip}`}</div>
        
          </div>
        )
       } )}
    </div>
  )
}


export default CustomerN;