import { IListMarkdownObject, IStrMarkdownOptions } from '@@interfaces';

import { toListMarkdown, toStrMarkdown } from '../src/markdown';

describe('toStrMarkdown', () => {
  it('should return markdown for bold text', () => {
    const options: IStrMarkdownOptions = {
      bold: true,
      italic: false,
      underline: false,
      strikethrough: false,
      codeBlock: false,
      link: null,
      headerLevel: 0,
    };
    const result = toStrMarkdown('Hello', options);
    expect(result).toBe('**Hello**');
  });

  it('should return markdown for italic text', () => {
    const options: IStrMarkdownOptions = {
      bold: false,
      italic: true,
      underline: false,
      strikethrough: false,
      codeBlock: false,
      link: null,
      headerLevel: 0,
    };
    const result = toStrMarkdown('Hello', options);
    expect(result).toBe('*Hello*');
  });

  it('should return markdown for header', () => {
    const options: IStrMarkdownOptions = {
      bold: false,
      italic: false,
      underline: false,
      strikethrough: false,
      codeBlock: false,
      link: null,
      headerLevel: 2,
    };
    const result = toStrMarkdown('Hello', options);
    expect(result).toBe('##Hello##');
  });

  it('should throw error for invalid header level', () => {
    const options: IStrMarkdownOptions = {
      bold: false,
      italic: false,
      underline: false,
      strikethrough: false,
      codeBlock: false,
      link: null,
      headerLevel: 7,
    };
    expect(() => toStrMarkdown('Hello', options)).toThrow('Header level must be between 1 and 6');
  });
});

describe('toListMarkdown', () => {
  it('should return markdown for list item', () => {
    const markdownObject: IListMarkdownObject = {
      text: 'Item 1',
      options: {
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false,
        codeBlock: false,
        link: null,
        headerLevel: 0,
      },
      sub: null,
    };
    const result = toListMarkdown(markdownObject);
    expect(result).toBe('- Item 1');
  });

  it('should return markdown for nested list', () => {
    const markdownObject: IListMarkdownObject = {
      text: 'Item 1',
      options: {
        bold: false,
        italic: false,
        underline: false,
        strikethrough: false,
        codeBlock: false,
        link: null,
        headerLevel: 0,
      },
      sub: [
        {
          text: 'Subitem 1',
          options: {
            bold: false,
            italic: false,
            underline: false,
            strikethrough: false,
            codeBlock: false,
            link: null,
            headerLevel: 0,
          },
          sub: null,
        },
        {
          text: 'Subitem 2',
          options: {
            bold: false,
            italic: false,
            underline: false,
            strikethrough: false,
            codeBlock: false,
            link: null,
            headerLevel: 0,
          },
          sub: [
            {
              text: 'Subitem 3',
              options: {
                bold: false,
                italic: false,
                underline: false,
                strikethrough: false,
                codeBlock: false,
                link: null,
                headerLevel: 0,
              },
              sub: null,
            },
          ],
        },
      ],
    };
    const result = toListMarkdown(markdownObject);
    expect(result).toBe('- Item 1\n  - Subitem 1\n  - Subitem 2\n    - Subitem 3');
  });
});
