import MailAddressContract from './MailAddressContract'

interface MailMessageContract {
  to: MailAddressContract;
  from: MailAddressContract;
  subject: string;
  body: string;
}

export default MailMessageContract
