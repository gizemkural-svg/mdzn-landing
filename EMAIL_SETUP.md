# Email Setup Instructions

Form submissions will be sent to: **gizem.kural@onedio.com**

## Option 1: Backend API (Recommended)

### Setup Steps:

1. **Install dependencies:**
   ```bash
   npm install express nodemailer cors dotenv
   ```

2. **Create a `.env` file in your project root:**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=gizem.kural@onedio.com
   PORT=3000
   ```

3. **For Gmail, create an App Password:**
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `EMAIL_PASS`

4. **Run the backend server:**
   ```bash
   node api-example.js
   ```

5. **Update the fetch URL in `src/App.jsx`:**
   - Find the `sendEmail` function
   - Update the fetch URL to: `http://localhost:3000/api/send-email` (or your production URL)

## Option 2: Use EmailJS (Frontend-only)

1. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

2. **Set up EmailJS account:**
   - Go to https://www.emailjs.com/
   - Create an account and set up an email service
   - Create an email template
   - Get your Service ID, Template ID, and Public Key

3. **Update `src/App.jsx`:**
   - Import EmailJS: `import emailjs from '@emailjs/browser';`
   - Update the `sendEmail` function to use EmailJS API

## Option 3: Use Formspree (Easiest, No Backend)

1. **Sign up at https://formspree.io/**
2. **Get your form endpoint URL**
3. **Update the fetch URL in `src/App.jsx`** to your Formspree endpoint

## Current Implementation

The form currently:
- ✅ Collects all form data (name, email, phone, etc.)
- ✅ Validates phone numbers
- ✅ Shows loading state during submission
- ✅ Sends data to `/api/send-email` endpoint
- ⚠️ **Requires backend setup** to actually send emails

## Testing

After setup, test the form:
1. Fill out the form
2. Submit it
3. Check the email inbox at `gizem.kural@onedio.com`
4. Check browser console for any errors

## Troubleshooting

- **Email not sending?** Check backend server logs
- **CORS errors?** Make sure CORS is enabled in your backend
- **Gmail not working?** Use App Password, not regular password
- **Form shows success but no email?** Check backend endpoint is running and configured correctly

