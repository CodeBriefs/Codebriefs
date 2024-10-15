import nodemailer from 'nodemailer'
import twilio from 'twilio'

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function sendOTP(emailOrPhone: string, otp: string) {
  if (emailOrPhone.includes('@')) {
    // Send email
    let transporter = nodemailer.createTransport({
      // Configure your email service here
    })

    await transporter.sendMail({
      from: '"CodeBriefs" <noreply@codebriefs.com>',
      to: emailOrPhone,
      subject: "Your OTP for CodeBriefs",
      text: `Your OTP is: ${otp}`,
      html: `<b>Your OTP is: ${otp}</b>`,
    })
  } else {
    // Send SMS
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

    await client.messages.create({
      body: `Your CodeBriefs OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: emailOrPhone
    })
  }
}