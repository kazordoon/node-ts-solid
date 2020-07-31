import MailMessageContract from './MailMessageContract'

interface MailProviderContract {
  sendMail(message: MailMessageContract): Promise<void>;
}

export default MailProviderContract
