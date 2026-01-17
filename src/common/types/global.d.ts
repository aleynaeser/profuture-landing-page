export declare global {
  type TIconProps = React.SVGProps<SVGSVGElement>;

  interface IJournal {
    title: string;
    description: string;
    startYear: number;
    issn: string;
    periodicity: string;
  }

  type TMotionVariant = {
    [k: string]: VariantType;
  };

  interface IContact {
    mail: TContactItem;
  }

  type TContactItem = {
    Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
    title: string;
    value: string;
    href: string;
  };

  interface IMenu {
    items: TMenuItem[];
  }

  type TMenuItem = {
    label: string;
    href: string;
  };

  declare module '*.svg' {
    import React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }
}
