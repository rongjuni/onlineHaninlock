/* eslint-disable */

import { useState } from "react";
import "./main_page.css";
import Accordion from 'react-bootstrap/Accordion';
// import { BsFillPhoneFill } from "react-icons/bs";
import { BsFillAlarmFill } from "react-icons/bs";
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
    <main className="container">
      <div className='row'>
        {
          allCustomers.map((customersInfo) => { 
            return(
              <CustomerCard customersInfo={customersInfo} />
              )
          })
        }
      </div>
    </main>
  )
}


function CustomerCard( {customersInfo} ) {

  return (
    <div className='card col-md-3'>
      <div className='card-body container-tile'>
        <span>
          <a href={
            customersInfo == false
              ? none 
              : customersInfo.website} target="_blank">
            <img src={customersInfo.image} alt={customersInfo.companyEng} className='container-customer-image' />
          </a>
          <Accordion defaultActiveKey="3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className='arc-header'>{`${customersInfo.companyEng} ${customersInfo.companyKor}`}</div>
              </Accordion.Header>
              <Accordion.Body>
               
                <div className='arc-content'>
                {/* Iphone Icon Importing*/}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  </svg>{`  `}
                  {customersInfo.phoneNumber}
                </div>

                <div className='arc-content'>
                  {/* Building Icon Import */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"/>
                  </svg>
                  {" "}
                  {`${customersInfo.addressStreet}`}
                </div>
                <div>
                  {`${customersInfo.addressCity} ${customersInfo.addressState} ${customersInfo.addressZip}`}
                </div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <div className='arc-header'>Company</div>
                </Accordion.Header>
              <Accordion.Body>
                <div className='arc-desc'>{customersInfo.descriptionEng}</div>
                <div className='arc-desc'>{customersInfo.descriptionKor}</div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </span>
    </div >
    </div >
  

  )
}


export default CustomerN;