import fs from 'fs';
import pdfParse from 'pdf-parse';

/**
 * Reads and extracts text content from a PDF file using pdf-parse.
 * @param filePath - The path to the PDF file.
 * @returns The extracted text content from the PDF.
 */
export const readPdf = async (filePath: string): Promise<string> => {
    if (!fs.existsSync(filePath)) {
        throw new Error(`PDF file not found: ${filePath}`);
    }
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text.trim();
};

/**
 * Compares two PDFs by their extracted text content.
 * @param pdfPath1 - The path to the first PDF file.
 * @param pdfPath2 - The path to the second PDF file.
 * @returns True if both PDFs have identical text content, otherwise false.
 */
export const comparePdfs = async (pdfPath1: string, pdfPath2: string): Promise<boolean> => {
    const pdfContent1 = await readPdf(pdfPath1);
    const pdfContent2 = await readPdf(pdfPath2);
    return pdfContent1 === pdfContent2;
};

/**
 * Validates if a PDF contains the expected content.
 * @param filePath - The path to the PDF file.
 * @param expectedContent - The expected text content.
 * @returns True if the content is found, otherwise false.
 */
export const validatePdfContent = async (filePath: string, expectedContent: string): Promise<boolean> => {
    const pdfContent = await readPdf(filePath);
    return pdfContent.includes(expectedContent);
};

/**
 * Compares a PDF's content with a given text string.
 * @param pdfPath - The path to the PDF file.
 * @param text - The text to compare against the PDF content.
 * @returns True if the PDF text matches exactly, otherwise false.
 */
export const comparePdfWithText = async (pdfPath: string, text: string): Promise<boolean> => {
    const pdfContent = await readPdf(pdfPath);
    return pdfContent === text.trim();
};
