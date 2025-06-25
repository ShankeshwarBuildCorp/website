# EmailJS Templates for Shankeshwar Buildcorp

This document provides sample templates to set up in your EmailJS account for sending emails from the Shankeshwar Buildcorp website.

## Setup Instructions

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service connecting to your email service provider (Gmail, Outlook, etc.)
3. Create the following email templates in your EmailJS account
4. Update the `emailService.js` file with your EmailJS User ID, Service ID, and Template IDs

## Template 1: Property Inquiry

**Template Name**: property_inquiry

**Subject**: {{subject}}

**HTML Content**:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Property Inquiry</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
        }
        .header {
            background-color: #2A4B5F;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
            background-color: #f9f9f9;
        }
        .section {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #fff;
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #666;
        }
        h1, h2 {
            color: #2A4B5F;
        }
        .highlight {
            color: #D4AF37;
            font-weight: bold;
        }
        .property-details {
            background-color: #f0f7fa;
            padding: 15px;
            border-left: 4px solid #2A4B5F;
            margin-bottom: 15px;
        }
        .contact-info {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>New Property Inquiry</h1>
        <p>Received on {{inquiry_date}}</p>
    </div>
    
    <div class="content">
        <div class="section">
            <h2>Property Information</h2>
            <div class="property-details">
                <p><strong>Property Name:</strong> {{property_name}}</p>
                <p><strong>Location:</strong> {{property_location}}</p>
                <p><strong>Property Type:</strong> {{property_type}}</p>
                <p><strong>Status:</strong> {{property_status}}</p>
            </div>
        </div>
        
        <div class="section">
            <h2>Inquiry Details</h2>
            <p><strong>Inquiry Type:</strong> <span class="highlight">{{inquiry_type}}</span></p>
            <p><strong>Message:</strong></p>
            <p>{{message}}</p>
        </div>
        
        <div class="section">
            <h2>Customer Information</h2>
            <p><strong>Name:</strong> {{from_name}}</p>
            <div class="contact-info">
                <p><strong>Email:</strong> {{from_email}}</p>
                <p><strong>Phone:</strong> {{phone}}</p>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <p>This is an automated email sent from the Shankeshwar Buildcorp website.</p>
        <p>© Shankeshwar Buildcorp. All rights reserved.</p>
    </div>
</body>
</html>
```

## Template 2: Contact Form

**Template Name**: contact_form

**Subject**: {{subject}}

**HTML Content**:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Website Contact Form</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
        }
        .header {
            background-color: #2A4B5F;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        .content {
            padding: 20px;
            background-color: #f9f9f9;
        }
        .section {
            margin-bottom: 20px;
            padding: 15px;
            background-color: #fff;
            border-radius: 4px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .footer {
            text-align: center;
            padding: 20px;
            font-size: 12px;
            color: #666;
        }
        h1, h2 {
            color: #2A4B5F;
        }
        .highlight {
            color: #D4AF37;
            font-weight: bold;
        }
        .message-box {
            background-color: #f0f7fa;
            padding: 15px;
            border-left: 4px solid #2A4B5F;
            margin-bottom: 15px;
        }
        .contact-info {
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #eee;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>New Website Contact</h1>
        <p>Received on {{inquiry_date}}</p>
    </div>
    
    <div class="content">
        <div class="section">
            <h2>Message Details</h2>
            <p><strong>Subject:</strong> <span class="highlight">{{subject}}</span></p>
            <p><strong>Inquiry Type:</strong> {{inquiry_type}}</p>
            <div class="message-box">
                <p>{{message}}</p>
            </div>
        </div>
        
        <div class="section">
            <h2>Customer Information</h2>
            <p><strong>Name:</strong> {{from_name}}</p>
            <div class="contact-info">
                <p><strong>Email:</strong> {{from_email}}</p>
                <p><strong>Phone:</strong> {{phone}}</p>
            </div>
        </div>
    </div>
    
    <div class="footer">
        <p>This is an automated email sent from the Shankeshwar Buildcorp website.</p>
        <p>© Shankeshwar Buildcorp. All rights reserved.</p>
    </div>
</body>
</html>
```

## Final Setup Steps

After creating the templates in EmailJS:

1. Note down the following credentials:
   - Your EmailJS User ID (from Account Settings)
   - Your Service ID (from the Email Services tab)
   - Your Template IDs (from the Email Templates tab)

2. Update the `src/utils/emailService.js` file with these values:

```javascript
// Initialize EmailJS with your User ID
const initEmailJS = () => {
  emailjs.init('YOUR_EMAILJS_USER_ID');
};

// In the sendPropertyInquiryEmail function:
const response = await emailjs.send(
  'YOUR_EMAILJS_SERVICE_ID',
  'YOUR_EMAILJS_TEMPLATE_ID_FOR_PROPERTY_INQUIRY',
  templateParams
);

// In the sendContactFormEmail function:
const response = await emailjs.send(
  'YOUR_EMAILJS_SERVICE_ID',
  'YOUR_EMAILJS_TEMPLATE_ID_FOR_CONTACT_FORM',
  templateParams
);
```

3. Test the forms to ensure emails are being sent correctly. 