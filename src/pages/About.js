import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const About = () => {
  return (
    <>

      <div style={{ padding: "50px", border: "5px solid #ccc" }}>
      <h1 style={{ textAlign: "center" }}>FP SANBERCODE</h1>
      <br />
      <p>
      Ini adalah website tentang review berbagai film dan game, disini admin bisa membuat tentang ulasan film maupun game dengan cara sebagai berikut.
        <ol>
          <li> membuat akun baru dengan mengisi username dan password </li>
          <li> login menggunakan akun yang telah dibuat </li>
          <li> mengisi data review yang berada di bagian edit review </li>
        </ol>
      web ini dibuat demi memenuhi tugas dari sanbercode
      </p>
      <br />
      <b>Biodata Pembuat Web :</b>

        <table>
        <tbody>
        
          <tr>
            <td className='nama_no'>1.</td>
               <td className='nama_nama'><strong>Nama</strong></td>
               <td className='nama_no'>:</td>
            <td className='nama_saya'>Govin Yudian Pradipta</td>
          </tr>
          <tr>
            <td>2.</td>
              <td><strong>Email</strong></td>
              <td>:</td>
            <td>goviyudian.p@gmail.com</td>
          </tr>
          <tr>
            <td>3.</td>
              <td><strong>Sistem Operasi yang digunakan</strong></td>
              <td>:</td>
            <td>Windows 10</td>
          </tr>
          <tr>
            <td>5.</td>
              <td><strong>Akun Telegram</strong></td>
              <td>:</td>
            <td>@govinyudianpradipta</td>
          </tr>                
        </tbody>
    </table>
    </div>
    </>
  );
};

export default About;
