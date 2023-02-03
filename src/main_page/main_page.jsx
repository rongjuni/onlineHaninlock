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
import { CheckLg } from "react-bootstrap-icons";


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
          {customersInfo.website == false
            ? <img src={customersInfo.image} alt={customersInfo.companyEng}
              className='container-customer-image'
              onClick={() => { alert('Sorry ' + customersInfo.companyEng +"'s website is not available yet")}} />
          
            : <a href={customersInfo.website} target="_blank">
              <img src={customersInfo.image} alt={customersInfo.companyEng} className='container-customer-image' />
            </a>}
          <Accordion defaultActiveKey="3">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className='arc-header'>{`${customersInfo.companyEng} / ${customersInfo.companyKor}`}</div>
              </Accordion.Header>
              <Accordion.Body>
               
                  <div className='arc-content'>
                  {/* Email Icon Import*/}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2H2Zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671Z"/>
                  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034v.21Zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
                  </svg>
                  {`  `}
                  {customersInfo.email}
                </div>

                <div className='arc-content'>
                  {/* Iphone Icon Importing*/}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                  <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                  </svg>{`  `}
                  {customersInfo.phoneNumber}
                </div>

                <div className='arc-content'>
                  {/* Building Icon Import */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-fill" viewBox="0 0 16 16">
                  <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H3Zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"/>
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