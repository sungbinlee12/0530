# QR Code Generator

This project is a simple QR code generator application that allows users to input text and generate a corresponding QR code. The application is built using HTML, CSS, and JavaScript.

## Project Structure

```
qrCodegen
├── public
│   ├── qrcode.html       # HTML structure for the QR code generator
│   └── qrcode.js         # JavaScript code for generating QR codes
├── vercel.json           # Configuration file for Vercel deployment
└── README.md             # Documentation for the project
```

## Getting Started

To set up and run the QR code generator application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Open `public/qrcode.html` in your web browser to view the application.

## Deployment on Vercel

To deploy the project on Vercel, follow these steps:

1. Sign up or log in to your Vercel account.
2. Install the Vercel CLI globally using npm:
   ```
   npm install -g vercel
   ```
3. Navigate to your project directory in the terminal.
4. Run the command:
   ```
   vercel
   ```
5. Follow the prompts to deploy your project.
6. After deployment, Vercel will provide you with a URL where your QR code generator application is hosted.

## Usage

1. Enter the text you want to convert into a QR code in the input field.
2. The QR code will be generated and displayed below the input field.
3. You can scan the QR code using any QR code scanner to retrieve the original text.

## License

This project is open-source and available under the MIT License.