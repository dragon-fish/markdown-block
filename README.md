# Markdown Block

Cool stuff that lets you embed markdown in your HTML.

Just like this:

<!-- prettier-ignore-start -->
```html
<markdown>
# Markdown Block

normal **bold** _italic_ ~~strikethrough~~
</markdown>
```
<!-- prettier-ignore-end -->

## Installation

```sh
pnpm add @dragon-fish/md-block
```

## Usage

**Using package**

```ts
// Simply import only, then you can use <markdown> tag in your HTML
import '@dragon-fish/md-block'

// Or sometimes you may need to using the API
import MarkdownBlock from '@dragon-fish/md-block'
const md = MarkdownBlock.createElement()
md.innerText = `
# Markdown Block

normal **bold** _italic_ ~~strikethrough~~
`
document.body.appendChild(md)
```

**In browser**

```html
<!-- Simply load the script -->
<script src="https://unpkg.com/@dragon-fish/md-block/dist/index.iife.js"></script>
<markdown>
  <!-- some markdown here -->
</markdown>

<!-- Or sometimes you may need to using the API -->
<script type="module">
  import { default as MarkdownBlock } from 'https://unpkg.com/@dragon-fish/md-block/dist/index.mjs?module'
  const md = MarkdownBlock.createElement()
  md.innerText = `
# Markdown Block

normal **bold** _italic_ ~~strikethrough~~
`
  document.body.appendChild(md)
</script>
```

---

## Trivals

I created this package as a practice for using [CustomElements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements). Although it doesn't have much use, it can indeed help you insert content written in markdown anywhere on the web page at any time.
