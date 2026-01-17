import MailIcon from '@icons/mail.svg';
import LocationIcon from '@icons/location.svg';
import PersonalIcon from '@icons/personal.svg';

export const contactData: IContact = {
  mail: {
    Icon: (props: TIconProps) => MailIcon(props),
    title: 'Mail Adresi',
    value: 'profuture@gmail.com',
    href: 'mailto:profuture@gmail.com',
  },
  editorsMail: {
    Icon: (props: TIconProps) => PersonalIcon(props),
    title: 'Dergi Editörü',
    value: 'elif@gmail.com',
    name: 'Prof. Dr. Elif Başkaya Acar',
    href: 'mailto:elif@gmail.com',
  },
  address: {
    Icon: (props: TIconProps) => LocationIcon(props),
    value: 'Profuture Teknoloji Yayınevi Ahmet Kemal Mahallesi 1245. Cadde No: 10 Çankaya/Ankara',
    href: 'https://www.google.com/maps',
  },
};
