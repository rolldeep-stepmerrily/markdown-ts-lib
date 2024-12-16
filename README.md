# Markdown TypeScript Library

This project is a Markdown generation library written in TypeScript. It provides functionality to convert various styles of text and lists into Markdown format.

## Installation

To use this library, you need to add it to your project. You can install it using npm.

```bash
npm install markdown-ts-lib
```

## Usage


### Text Conversion

You can use the `toStrMarkdown` function to convert text into Markdown format. This function takes two arguments: the text to be converted and the style options.

```typescript
import { toStrMarkdown } from 'markdown-ts-lib';

const options = {
  bold: true,
  italic: false,
  underline: false,
  strikethrough: false,
  codeBlock: false,
  link: null,
  headerLevel: 0,
};

const markdown = toStrMarkdown('Hello', options);
```


#### Style Options

- `bold`: Displays the text in bold.
- `italic`: Displays the text in italics.
- `underline`: Adds an underline to the text.
- `strikethrough`: Adds a strikethrough to the text.
- `codeBlock`: Displays the text as a code block.
- `link`: Adds a link.
- `headerLevel`: Sets the level of the header (1-6).

### List Conversion

You can use the `toListMarkdown` function to convert lists into Markdown format. This function takes an object that includes list items and sub-items.

```typescript
import { toListMarkdown } from 'markdown-ts-lib';

const markdownObject = {
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
      text: 'Sub Item 1',
      options: { bold: true },
      sub: null,
    },
    {
      text: 'Sub Item 2',
      options: { italic: true, underline: true },
      sub: [
        {
          text: 'Sub Sub Item 1',
          options: { bold: true, italic: true, underline: true },
          sub: null,
        },
      ],
    },
  ],
};
const markdownList = toListMarkdown(markdownObject);
```


## Testing

This project uses Jest for testing. To run the tests, use the following command.

```bash
npm test
```

## Contributing

If you would like to contribute, please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.