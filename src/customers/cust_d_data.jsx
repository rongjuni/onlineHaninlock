import { useState } from 'react';
import dragoon from '../img/cust_img_d/dragoon.jpg'



let cust_d_data = [
  {
    id: 'd001',
    contactPerson: "Chloe",
    companyEng: "Dragoon",
    companyKor: "드.라.군",
    descriptionEng: "If you want to win a battle, more dragoon is needed. 그냥 테스트니까 막 후려본다 엄청 길게 쓰며는 어떻게 될까?  하하하하하하하 너무 궁금하지? 나도 몰라 헤헤헷. 남들과는 다르게 누구보다 빠르게 색 다르게 나그네",
    descriptionKor: "하지만 드라군이 나타난다면?",
    phoneNumber: '999-999-9999',
    email: 'amore@donotemail.com',
    image: dragoon,
    addressStreet: '99999 Main St',
    addressCity: 'Fairfax',
    addressState: 'Virginia',
    addressZip: 22032,
    businessCategory: 'makeup product',
    website: false,
      category: {
      cat1: 'music',
      cat2: 'celebrity',
      cat3: 'play',
      cat4: 'k-pop',
    }
  },

]

  
export default cust_d_data;
