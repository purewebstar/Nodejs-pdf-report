const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const server = express();
const doc = new PDFDocument();

doc.pipe(fs.createWriteStream('report.pdf'));

doc
  .fontSize(25)
  .text('Hi, I am a web developer!', 100, 100);

doc.image('model.png', {
  fit: [250, 300],
  align: 'center',
  valign: 'center'
});

doc
  .addPage()
  .fillColor('red')
  .text('Check my websites', 100,100)
  .underline(100, 100, 160, 27, { color: '#0000FF' })
  .link(100, 100, 160, 27,'https://derash.abraham-mitiku.com/')

doc.end();

server.get('/', (req, res)=>{
    res.json({message: ''})
})

server.listen(4000);