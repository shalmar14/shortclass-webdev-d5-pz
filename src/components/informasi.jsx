import React from "react";
import '../App.css';

function Informasi() {
  return (
    <div className ="container-informasi">
       <div className = "atas">
       <h1 className ="h1">Hallo, Semuanya !</h1>
       <img className = "hello" src="hello.png" alt="hello guys"  width="50" height="50" ></img>
       </div>
    
      <div className = "photo-segment">
      <img className = "photo" src="photo.jpg" alt="Orang Keren"  width="300" height="300" ></img>
      </div>

      <div className="information-segment">
        <div className="halaman">
        <h2>Nama : Omar Shalhan Imanie</h2>
        <h2>Pendidikan : Kuliah</h2>
        <h2>Umur : 20 Tahun</h2>
        </div>
    
      </div>

    </div>
  )
}

export default Informasi;