# Setting Up Email Functionality for Shankeshwar Buildcorp

This document provides step-by-step instructions for setting up email functionality for inquiry forms on the Shankeshwar Buildcorp website.

## Overview

The website uses [EmailJS](https://www.emailjs.com/) to send emails directly from the frontend when users submit:
1. Property inquiry forms (on property detail pages)
2. Contact form (on the contact page)

Emails are sent to: **atharvataware07@gmail.com**

## Setup Instructions

### Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for an account
2. After signing up, you'll get your **User ID** from the Account Dashboard

### Step 2: Connect Your Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service" 
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the prompts to connect your email account
5. After connecting, you'll get a **Service ID**

### Step 3: Create Email Templates

You need to create two email templates:

#### Property Inquiry Template

1. In the EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Set the template name to `property_inquiry`
4. Set the subject to `{{subject}}`
5. Copy the HTML template from `src/config/emailTemplates.md` for "Property Inquiry"
6. Save the template and note the **Template ID**

#### Contact Form Template

1. In the EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Set the template name to `contact_form`
4. Set the subject to `{{subject}}`
5. Copy the HTML template from `src/config/emailTemplates.md` for "Contact Form"
6. Save the template and note the **Template ID**

### Step 4: Update the Code

1. Open `src/utils/emailService.js`
2. Update the following values:
   ```javascript
   // Replace with your EmailJS User ID
   emailjs.init('YOUR_EMAILJS_USER_ID');

   // In sendPropertyInquiryEmail function, replace:
   const response = await emailjs.send(
     'YOUR_EMAILJS_SERVICE_ID',
     'YOUR_EMAILJS_TEMPLATE_ID_FOR_PROPERTY_INQUIRY',
     templateParams
   );

   // In sendContactFormEmail function, replace:
   const response = await emailjs.send(
     'YOUR_EMAILJS_SERVICE_ID',
     'YOUR_EMAILJS_TEMPLATE_ID_FOR_CONTACT_FORM',
     templateParams
   );
   ```

### Step 5: Test the Forms

1. Start the development server with `npm run dev`
2. Test the property inquiry form by visiting a property page
3. Test the contact form by visiting the contact page
4. Check the recipient email (atharvataware07@gmail.com) to verify that emails are being received

## Email Format

### Property Inquiry Email

Each property inquiry email includes:
- Property details (name, location, type, status)
- Inquiry type and message
- Customer information (name, email, phone)
- Date/time of inquiry

### Contact Form Email

Each contact form email includes:
- Subject and inquiry type
- Message content
- Customer information (name, email, phone)
- Date/time of contact

## Troubleshooting

- **Emails not sending**: Check that your EmailJS credentials are correct and that you haven't exceeded your plan limits
- **Missing information in emails**: Verify that the template variables match the data being sent
- **Form submits but no email received**: Check your email spam folder and the EmailJS dashboard for error logs

## EmailJS Usage Limits

Note that the free plan of EmailJS has usage limits:
- 200 emails per month
- 2 email templates
- 1 email service

If you need to send more emails, consider upgrading to a paid plan. 