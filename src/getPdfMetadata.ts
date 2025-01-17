import { PdfLib, PdfMetadata } from "./types";
import { capitalizeFirstLetter } from "./helperFunctions";
//@ts-expect-error no type declarations for this module
import pdfLib from "pdf-to-text";

// Placeholder until there's a front-end where this param can be input
const pdfFilePath = "../dhl-handbuch-funktion-retoure-v7-122019.pdf";

// Bad file error test
// const pdfFilePath = "2f";

// Getting the .pdf metadata out of the callback function
const getPdfMetadata = async (
   pdfLib: PdfLib,
   pdfFilePath: string
): Promise<PdfMetadata> => {
   return new Promise((resolve, reject) => {
      pdfLib.info(pdfFilePath, (err: string, results: PdfMetadata) => {
         if (err) {
            console.log(capitalizeFirstLetter(err));
            reject(capitalizeFirstLetter(err));
         }
         resolve(results);
      });
   });
};

export const pdfMetadata = async () => {
   const metadata = await getPdfMetadata(pdfLib, pdfFilePath);
   return metadata;
};
