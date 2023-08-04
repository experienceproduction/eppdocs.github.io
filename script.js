import { jsPDF } from "jspdf";

const doc = new jsPDF();

doc.text("Hello World!", 20, 20);
doc.save("a4.pdf");