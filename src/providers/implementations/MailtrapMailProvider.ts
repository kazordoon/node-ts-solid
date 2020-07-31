import MailProviderContract from '@providers/MailProviderContract'
import MailMessageContract from '@providers/MailMessageContract'
import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

class MailtrapMailProvider implements MailProviderContract {
  private transporter: nodemailer.Transporter

  constructor () {
    const transportOptions: SMTPTransport.Options = {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    }
    this.transporter = nodemailer.createTransport(transportOptions)
  }

  async sendMail (message: MailMessageContract) {
    await this.transporter.sendMail(message)
  }
}

export default MailtrapMailProvider
