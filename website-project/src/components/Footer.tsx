import React from 'react'
import svgList from '../helpers/svgList'
import '../css/Footer.css'
const svg = svgList();



export default function Footer() {

  return (
    
    <footer className="bg-dark text-center text-white">
        
        <div className="container flex p-4 pb-0">
         <section className="mb-4 flex justify-content-evenly">
         
            <a className="btn btn-floating btn-block m-4 bg-dark equalButton"  href="#!" role="button">
                <img className="text-center rounded b-svg" src={svg["Whatsapp"]} alt="" />  
            </a>
            
            <a className="btn btn-floating  btn-block m-4 bg-dark equalButton" href="#!" role="button">   
                <img className="text-center rounded b-svg" src={svg["Facebook"]} alt="" />

            </a>
            
            <a className="btn btn-floating btn-block m-2 bg-dark equalButton" href="#!" role="button">
                <img className="text-center rounded b-svg" src={svg["Twitter"]} alt="" />

            </a>         
            
            <a className="btn btn-floating m-4 bg-dark equalButton" href="#!" role="button">
                <img className="text-center rounded b-svg" src={svg["Phone"]} alt="" />

            </a>

            <a className="btn btn-floating m-4 bg-dark equalButton" href="#!" role="button">
                <img className="text-center rounded b-svg" src={svg["Instagram"]} alt="" />

            </a>

            <a className="btn btn-floating m-4 bg-dark equalButton" href="#!" role="button">
                <img className="text-center rounded b-svg" src={svg["Youtube"]} alt="" />

            </a>      

            </section>
  </div>

  <div className="text-center p-3">
    © 2023 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">  Üsküdar Üniversitesi</a>
  </div>
</footer>

)
}