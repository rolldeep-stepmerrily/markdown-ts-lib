interface IMarkdownLink {
  url: string;
  text: string;
}

export interface IStrMarkdownOptions {
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  codeBlock?: boolean;
  link?: IMarkdownLink | null;
  headerLevel?: number;
}

export interface IListMarkdownObject {
  text: string;
  options: IStrMarkdownOptions;
  sub?: IListMarkdownObject[] | null;
}
