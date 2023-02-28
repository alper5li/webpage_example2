import React from 'react'
import svgList from '../helpers/svgList'

const svg = svgList();



export default function Footer() {

  return (
    
    <footer className="bg-dark text-center text-white">
        
        <div className="container flex p-4 pb-0">
         <section className="mb-4 flex justify-content-evenly">
         
            <a className="btn btn-outline-light btn-floating m-4 bg-white "  href="#!" role="button">
                <img className="text-center rounded" src={svg["Whatsapp"]} alt="" />  
            </a>
            
            <a className="btn btn-outline-light btn-floating m-4 bg-white" href="#!" role="button">   
                <img className="text-center rounded" src={svg["Facebook"]} alt="" />

            </a>
            
            <a className="btn btn-outline-light btn-floating m-2 bg-white" href="#!" role="button">
                <img className="text-center rounded" src={svg["Twitter"]} alt="" />

             </a>
             
            <a className="btn btn-outline-light btn-floating m-4 bg-white" href="#!" role="button">
                <img className="text-center rounded" src={svg["Airplane"]} alt="" />

            </a>
            
            <a className="btn btn-outline-light btn-floating m-4 bg-white" href="#!" role="button">
                <img className="text-center rounded" src={svg["Phone"]} alt="" />

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