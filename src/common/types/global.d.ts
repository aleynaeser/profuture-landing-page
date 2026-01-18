export declare global {
  type TIconProps = React.SVGProps<SVGSVGElement>;

  interface IProfuture {
    title: string;
    description: string;
    startYear: number;
    issn: string;
    periodicity: string;
  }

  interface IJournal {
    id: string;
    title: string;
    cover: string;
    volume: number;
    issue: number;
    date: string;
    isNew?: boolean;
  }

  type TMotionVariant = {
    [k: string]: VariantType;
  };

  interface IContact {
    mail: TContactItem;
    editorsMail: TContactItem;
    address: TContactItem;
  }

  type TContactItem = {
    Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactNode;
    value: string;
    href: string;
    title?: string;
    name?: string;
  };

  interface IMenu {
    items: TMenuItem[];
  }

  type TMenuItem = {
    label: string;
    href: string;
  };

  interface IArticle {
    id: string;
    title: string;
    category: string;
    type: string;
    image: string;
    pages?: string;
    authors?: string[];
    content: string;
  }

  declare module '*.svg' {
    import React from 'react';
    const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }
}
