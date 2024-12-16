import { IListMarkdownObject, IStrMarkdownOptions } from './interfaces';

export const toStrMarkdown = (text: string, options?: IStrMarkdownOptions): string => {
  let markdown = text;

  const styles: string[] = [];

  if (options?.codeBlock) {
    styles.push('```');
  } else {
    if (options?.bold) {
      styles.push('**');
    }

    if (options?.italic) {
      styles.push('*');
    }

    if (options?.underline) {
      styles.push('_');
    }

    if (options?.strikethrough) {
      styles.push('~');
    }

    if (options?.link) {
      styles.push(`[${options.link.text}](${options.link.url})`);
    }

    if (options?.headerLevel && options?.headerLevel < 7) {
      styles.push(`#`.repeat(options?.headerLevel));
    }

    if (options?.headerLevel && (options?.headerLevel < 1 || options?.headerLevel > 6)) {
      throw new Error('Header level must be between 1 and 6');
    }
  }

  if (styles.length > 0) {
    const openingTags = styles.join('');
    const closingTags = styles.reverse().join('');

    markdown = `${openingTags}${markdown}${closingTags}`;
  }

  return markdown;
};

export const toListMarkdown = (markdownObject: IListMarkdownObject, depth: number = 0): string => {
  const { text, options, sub } = markdownObject;

  const markdown = toStrMarkdown(text, options);
  const indent = '  '.repeat(depth);

  if (sub) {
    const subMarkdown = sub.map((subItem) => toListMarkdown(subItem, depth + 1)).join('\n');

    return `${indent}- ${markdown}\n${subMarkdown}`;
  }

  return `${indent}- ${markdown}`;
};
