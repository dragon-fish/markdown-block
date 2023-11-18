# Markdown Tag

Cool stuff that lets you embed markdown in your HTML.

Just like this:

<!-- prettier-ignore-start -->
```html
<markdown-content>
# Markdown Render

normal **bold** _italic_ ~~strikethrough~~
</markdown-content>
```
<!-- prettier-ignore-end -->

## Installation

```sh
pnpm add @dragon-fish/markdown-tag
```

## Usage

### As NPM package

```ts
// Simply import only, then you can use <markdown> tag in your HTML
import '@dragon-fish/markdown-tag'

// Or sometimes you may need to using the API
import MarkdownBlock from '@dragon-fish/markdown-tag'
const md = MarkdownBlock.createElement()
md.innerText = `
# Markdown Render

normal **bold** _italic_ ~~strikethrough~~
`
document.body.appendChild(md)
```

### In browser

```html
<!-- Simply load the script -->
<script src="https://unpkg.com/@dragon-fish/markdown-tag"></script>
<markdown>
  <!-- some markdown here -->
</markdown>

<!-- Or sometimes you may need to using the API -->
<script type="module">
  import { default as MarkdownBlock } from 'https://unpkg.com/@dragon-fish/markdown-tag?module'
  const md = MarkdownBlock.createElement()
  md.innerText = `
# Markdown Render

normal **bold** _italic_ ~~strikethrough~~
`
  document.body.appendChild(md)
</script>
```

## Tag name alias

```ts
MarkdownBlock.install('markdown-content')
//                    ↑ replace with your own tag name
```

---

## Trivals

I created this package as a practice for using [CustomElements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements). Although it doesn't have much use, it can indeed help you insert content written in markdown anywhere on the web page at any time.
