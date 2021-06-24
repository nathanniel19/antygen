import React from "react";
import { Card } from "react-bootstrap";

const marginStyle = {
    marginTop: "50px",
    textAlign: 'left'
}



const Biodata = () => {
  return (
    <div>
        <div className="container">
        <Card style ={marginStyle}>
            <Card.Header>Hasil Test Swab Muh. Sulaeman</Card.Header>
            <Card.Body><b>Pasien ID:</b> 35671</Card.Body>
            <Card.Body><b>Nama Lengkap:</b> Muh. Sulaeman</Card.Body>
            <Card.Body><b>NIK:</b> 3328131007930003</Card.Body>
            <Card.Body><b>Jenis Kelamin:</b> Laki-Laki</Card.Body>
            <Card.Body><b>Tempat, Tanggal Lahir:</b> Tegal, 10-07-1993</Card.Body>
            <Card.Body><b>Layanan:</b> Swab Antigen</Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Biodata;
