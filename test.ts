import fs from "fs";
import PDFUtils from ".";

const test = async () => {
  // get the file
  const file: Buffer = await new Promise((resolve) => {
    fs.readFile("input.pdf", (err, data) => {
      if (err) throw err;
      resolve(data);
    });
  });

  // parse the file
  const pdf = new PDFUtils();
  const content = await pdf.pdf2Html(file);
  console.log(content);
};

test();
