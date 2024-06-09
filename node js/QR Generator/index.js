/*
    1. use the inquirer npm package to get user i/p 
    2. use the qr-image npm package to save the user entered URL into a QR code image.
    3. Create a txt file to save the user input using the native fs node module.
 */

import inquirer from 'inquirer';
// var qr = require['qr-image'];
import qr from 'qr-image';
import fs, { writeFile } from 'fs';

inquirer
  .prompt([{
    /* Pass your questions in here */
    message: "Type your URL: " ,
    name: "URL"
  }])

  .then((answers) => {
    const url = answers.URL; 
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-img.png'));

    fs.writeFile("URL.txt", url, (err) => {
        if(err) throw err;
        console.log("The file has been saved");
    });
  })

  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

