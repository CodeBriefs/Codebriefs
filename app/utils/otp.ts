import nodemailer from 'nodemailer';
import twilio from 'twilio';

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendEmailOTP(email: string, otp: string): Promise<boolean> {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP for CodeBriefs',
      text: `Your OTP is: ${otp}`
    });
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}

async function sendSMSOTP(phoneNumber: string, otp: string): Promise<boolean> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  try {
    await client.messages.create({
      body: `Your CodeBriefs OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber
    });
    return true;
  } catch (error) {
    console.error('Failed to send SMS:', error);
    return false;
  }
}

export async function sendOTP(contact: string, contactType: 'email' | 'phone'): Promise<boolean> {
  const otp = generateOTP();
  if (contactType === 'email') {
    return sendEmailOTP(contact, otp);
  } else {
    return sendSMSOTP(contact, otp);
  }
}