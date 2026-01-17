import MailIcon from '@icons/mail.svg';

export const contactData: IContact = {
  mail: {
    Icon: (props: TIconProps) => MailIcon(props),
    title: 'Mail Adresi',
    value: 'profuture@gmail.com',
    href: 'mailto:profuture@gmail.com',
  },
};
