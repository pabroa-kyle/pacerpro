import { test, expect } from '@playwright/test';
import path from 'path'; // Correct import
import { readPdf } from '../pages/pdf';

// ✅ Function to normalize text by removing extra spaces and line breaks
const normalizeText = (text: string) => text.replace(/\s+/g, ' ').trim();

// ✅ Function to safely extract text from PDF
const safeReadPdf = async (filePath: string): Promise<string> => {
    try {
        return normalizeText(await readPdf(filePath));
    } catch (error) {
        throw new Error(`❌ Error reading PDF at ${filePath}: ${error.message}`);
    }
};

// ✅ Extract case number 
const extractCaseNumber = (text: string): string | null => {
    const caseNumberPattern = /\d{2}-[A-Z]{2}-\d{6}/; // Matches format like 652801/2024
    const match = text.match(caseNumberPattern);
    return match ? match[0] : null;
};

test.describe('PDF Comparison Tests', () => {
    let pdf1Path: string;
    let pdf2Path: string;
    const specificText = "SC Debt Owed-Tier 3 $500.01-$2,500.00"; // ✅ Specific text to compare
    const expectedCaseNumber = "23-CC-128736"; // ✅ Expected case number

    test.beforeAll(() => {
        pdf1Path = '/Users/macbookpro/Downloads/Judicial Automated Workflow System signed orders_ Case Description, CASE NUMBER (13th Judicial Circuit).pdf'; 
        pdf2Path = '/Users/macbookpro/Downloads/Judicial Automated Workflow System signed orders_ Case Description, CASE NUMBER (13th Judicial Circuit).pdf'; 
    });

    test('Compare two PDFs textually, check specific text, format, and case number', async () => {
        const pdfText1 = await safeReadPdf(pdf1Path);
        const pdfText2 = await safeReadPdf(pdf2Path);

        // ✅ Extract case number from both PDFs
        const caseNumber1 = extractCaseNumber(pdfText1) ?? "Not Found";
        const caseNumber2 = extractCaseNumber(pdfText2) ?? "Not Found";

        console.log(` Extracted Case Number from PDF 1: ${caseNumber1}`);
        console.log(` Extracted Case Number from PDF 2: ${caseNumber2}`);

        // ✅ Ensure case number exists before comparing
        if (caseNumber1 === "Not Found" || caseNumber2 === "Not Found") {
            throw new Error("❌ Case number not found in one or both PDFs");
        }

        // ✅ Compare extracted case number with expected value
        expect(caseNumber1).toBe(expectedCaseNumber);
        expect(caseNumber2).toBe(expectedCaseNumber);

        console.log(`✅ Case number matches expected value: ${expectedCaseNumber}`);

        // ✅ Check if the specific text exists in both PDFs
        const index1 = pdfText1.indexOf(specificText);
        const index2 = pdfText2.indexOf(specificText);

        console.log(`Specific Text Position in PDF 1: ${index1}`);
        console.log(`Specific Text Position in PDF 2: ${index2}`);

        // ❌ Ensure the text is found in both PDFs
        if (index1 === -1 || index2 === -1) {
            throw new Error(`❌ Specific text "${specificText}" not found in one or both PDFs.`);
        }

        // ❌ Ensure the text appears at the same position in both PDFs
        if (index1 !== index2) {
            throw new Error(`❌ Mismatch: "${specificText}" found at index ${index1} in PDF 1 but ${index2} in PDF 2.`);
        }

        console.log(`✅ Specific text found at the same position in both PDFs: "${specificText}"`);
    });
});
