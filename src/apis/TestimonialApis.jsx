import { SHEET_API_KEY } from "../services/Helpers";

const SPREADSHEET_ID = '1VNNYtqOBFT7ePDzS1QPGtbeBvOZ8Ge4NDDXBlYnuE7w';
const RANGE = "testimonial!A1:E10";

export const fetchTestimonialSheetData = async () => {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${SHEET_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.values) return [];

    const headers = data.values[0];
    return data.values.slice(1).map(row => {
        let obj = {};
        headers.forEach((header, index) => {
            obj[header] = row[index] || "";
        });
        return obj;
    });
};