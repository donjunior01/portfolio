# Email Backend Setup Guide

## 📧 Quick Setup (5 minutes)

Your portfolio now has a working email backend! Follow these steps to configure it:

---

## Step 1: Get Gmail App Password

Since you're using Gmail (juniorassobjio@gmail.com), you need to generate an App Password:

### 1.1 Enable 2-Step Verification (if not already enabled)
1. Go to https://myaccount.google.com/security
2. Find "How you sign in to Google"
3. Click "2-Step Verification"
4. Follow the prompts to enable it

### 1.2 Generate App Password
1. Go back to https://myaccount.google.com/security
2. Under "How you sign in to Google", click **"App passwords"**
3. In the "Select app" dropdown, choose **"Mail"**
4. In the "Select device" dropdown, choose **"Other (Custom name)"**
5. Enter a name like **"Portfolio Website"**
6. Click **"Generate"**
7. You'll see a 16-character password (e.g., `abcd efgh ijkl mnop`)
8. **Copy this password** (remove spaces: `abcdefghijklmnop`)

---

## Step 2: Configure Backend

1. Open the file: `backend/.env`

2. Replace `your_app_password_here` with your actual App Password:

```env
EMAIL_USER=juniorassobjio@gmail.com
EMAIL_PASS=abcdefghijklmnop
PORT=3001
```

3. Save the file

---

## Step 3: Start the Backend Server

Open a new terminal and run:

```bash
cd backend
npm start
```

You should see:
```
🚀 Email server running on http://localhost:3001
✅ Email server is ready to send messages
```

---

## Step 4: Test Your Contact Form

1. Make sure your backend server is running (Step 3)
2. Start your React Native app: `npx expo start`
3. Open your portfolio in the browser (press `w` in Expo)
4. Go to the Contact page
5. Fill out the form and click "Send Message"
6. Check your email at juniorassobjio@gmail.com

---

## 🎯 What This Setup Does

- ✅ Sends emails **directly from your website**
- ✅ No external email client needed
- ✅ Messages arrive in **juniorassobjio@gmail.com**
- ✅ Validates email format and message length (5+ words)
- ✅ Beautiful HTML email formatting
- ✅ Reply-to address set to sender's email
- ✅ Works on localhost and can be deployed

---

## 🚀 Deployment Options

### Option 1: Deploy Backend to Vercel (Free)
1. Create `vercel.json` in backend folder:
```json
{
  "version": 2,
  "builds": [{ "src": "server.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "/server.js" }]
}
```

2. Install Vercel CLI: `npm i -g vercel`
3. Deploy: `cd backend && vercel`
4. Update Contact.js fetch URL to your Vercel URL

### Option 2: Deploy Backend to Render (Free)
1. Push your code to GitHub
2. Go to https://render.com
3. Create new "Web Service"
4. Connect your GitHub repo
5. Set root directory to `backend`
6. Add environment variables (EMAIL_USER, EMAIL_PASS)
7. Update Contact.js fetch URL to your Render URL

### Option 3: Deploy Backend to Railway (Free)
1. Go to https://railway.app
2. Create new project from GitHub
3. Set root directory to `backend`
4. Add environment variables
5. Update Contact.js fetch URL to your Railway URL

---

## 📝 Troubleshooting

### "Failed to send email"
- ✅ Make sure backend server is running (`cd backend && npm start`)
- ✅ Check that you entered the App Password correctly in `.env`
- ✅ Verify 2-Step Verification is enabled on your Google account

### "Invalid login" error
- ✅ Generate a new App Password
- ✅ Make sure you removed spaces from the password
- ✅ Don't use your regular Gmail password - use App Password only

### "Connection refused"
- ✅ Backend server must be running before testing
- ✅ Check that backend is running on port 3001
- ✅ Make sure no other app is using port 3001

---

## 🎉 You're Done!

Once configured, your contact form will:
1. Send emails directly from your website
2. Deliver to juniorassobjio@gmail.com
3. Show success confirmation to users
4. Clear the form automatically

No external services like EmailJS needed! 🚀
