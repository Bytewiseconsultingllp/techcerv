import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false // Sometimes needed for development
      }
    });

    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

    // Email Template for Admin
    const adminHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px 0; border-bottom: 3px solid #154B9C;">
          <img src="https://Techcerv.com/images/ih1.png" alt="Techcerv Logo" style="max-height: 60px; height: auto;" />
        </div>
        
        <!-- Content -->
        <div style="padding: 30px 20px; background-color: #f8f9fa;">
          <h2 style="color: #154B9C; margin-top: 0;">New Contact Request</h2>
          <p style="font-size: 16px; color: #555;">You have received a new inquiry from your website.</p>
          
          <div style="background-color: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); overflow: hidden; margin-top: 20px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tbody>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 15px; font-weight: bold; color: #154B9C; width: 140px; background-color: #f1f5fb;">Name</td>
                  <td style="padding: 15px;">${firstName} ${lastName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 15px; font-weight: bold; color: #154B9C; background-color: #f1f5fb;">Email</td>
                  <td style="padding: 15px;"><a href="mailto:${email}" style="color: #154B9C; text-decoration: none;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 15px; font-weight: bold; color: #154B9C; background-color: #f1f5fb;">Phone</td>
                  <td style="padding: 15px;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 15px; font-weight: bold; color: #154B9C; background-color: #f1f5fb; vertical-align: top;">Message</td>
                  <td style="padding: 15px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="text-align: center; padding: 20px; color: #999; font-size: 12px; border-top: 1px solid #eee;">
          <p>&copy; 2026 Techcerv. All rights reserved.</p>
        </div>
      </div>
    `;

    // Email Template for User (Client)
    const clientHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <!-- Header -->
        <div style="text-align: center; padding: 20px 0; border-bottom: 3px solid #154B9C;">
          <img src="https://Techcerv.com/images/ih1.png" alt="Techcerv Logo" style="max-height: 60px; height: auto;" />
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
          <h2 style="color: #154B9C; margin-top: 0;">Hello ${firstName},</h2>
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Thank you for reaching out to <strong>Techcerv</strong>. We have successfully received your message and appreciate you contacting us.
          </p>
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Our team is reviewing your inquiry and will get back to you shortly, usually within 24 hours.
          </p>
          
          <div style="background-color: #f8f9fa; border-left: 4px solid #154B9C; padding: 20px; margin: 30px 0; border-radius: 4px;">
            <p style="margin: 0; font-style: italic; color: #666;">"${message}"</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Best Regards,<br>
            <strong>Team Techcerv</strong>
          </p>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f1f5fb; padding: 30px; text-align: center; color: #666; font-size: 14px; border-radius: 0 0 8px 8px;">
          <p style="margin: 5px 0;"><strong>Techcerv</strong></p>
          <p style="margin: 5px 0;">Cowrks, Rmz galleria offices, yelahanka, Bengaluru 560064</p>
          <p style="margin: 5px 0;">
            <a href="tel:+916364172323" style="color: #154B9C; text-decoration: none;">+91 63641 72323</a> | 
            <a href="mailto:partner@Techcerv.com" style="color: #154B9C; text-decoration: none;">partner@Techcerv.com</a>
          </p>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">&copy; ${new Date().getFullYear()} Techcerv. All rights reserved.</p>
        </div>
      </div>
    `;

    // Send Admin Email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: adminEmail,
      subject: `New Contact: ${firstName} ${lastName}`,
      html: adminHtml,
      replyTo: email
    });

    // Send Client Email (CC/Confirmation)
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: `Thank you for contacting Techcerv`,
      html: clientHtml
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
