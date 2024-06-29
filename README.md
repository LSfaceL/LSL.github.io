# E-commerce Website

## Overview
A simple e-commerce website with product listing, shopping cart functionality, and a contact form.

## Features
- Product listing
- Shopping cart
- Contact form integrated with Google Sheets

## Contact Form Integration
The contact form is integrated with Google Sheets using Google Apps Script. To set up the integration:

1. Create a new Google Sheet.
2. Set up Google Apps Script with the following code:

    ```javascript
    function doPost(e) {
      var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
      var data = JSON.parse(e.postData.contents);
      sheet.appendRow([data.name, data.email, data.message, new Date()]);
      
      return ContentService.createTextOutput(JSON.stringify({ 'status': 'success' })).setMimeType(ContentService.MimeType.JSON);
    }
    ```

3. Deploy the script as a web app and update the `contact.html` file with the URL.

## How to Run
1. Clone the repository.
2. Open `index.html` in a browser to view the website locally.
3. Visit the GitHub Pages URL for the live site.

## License
This project is licensed under the MIT License.
