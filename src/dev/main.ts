import './style.css'
import MarkdownElement from '..'

// main
;(async () => {
  const app = document.querySelector<HTMLDivElement>('#app')!
  const markdown = await fetch('demo.md').then((res) => res.text())

  const m = MarkdownElement.createElement()
  m.innerText = markdown

  app.innerHTML = `
<markdown-render>
${markdown}
</markdown-render>

<div is="markdown-render">
hello, **is**
</div>

<div data-is="markdown-render">
hello, **data-is**
</div>
`
  // app.append(m);

  document.querySelectorAll('[data-is="markdown-render"]').forEach((el) => {
    const attributes = el.attributes
    const m = MarkdownElement.createElement()
    m.innerText = el.innerHTML
    el.replaceWith(m)
    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes[i]
      m.setAttribute(attr.name, attr.value)
    }
  })
})()
