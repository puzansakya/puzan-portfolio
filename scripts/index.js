
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const info = require('./info');

async function generatePDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlFilePath = path.join(__dirname, 'template-builder/dist/index.html');

    const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

    await page.setContent(htmlContent, { waitUntil: 'networkidle0' });


    const pdfBuffer = await page.pdf({
        format: 'A4'
    });

    await browser.close();

    fs.writeFile(path.join(__dirname, "../public/puzan_sakya_resume.pdf"), pdfBuffer, (err) => {
        if (err) {
            console.error('Error writing PDF to file:', err);
        } else {
            console.log('PDF written to file successfully!');
        }
    });
}

generatePDF().then(() => {
    console.log('PDF generated successfully!');
}).catch((error) => {
    console.error('Error generating PDF:', error);
});

/*

flowchart TB
    a[start]
    b[parse info]
    c[select template]
    d[generate template]
    e[generate download link]
    z[end]

    a --> b --> c --> d --> e --> z
 
 */