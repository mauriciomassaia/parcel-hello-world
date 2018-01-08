import css from './panel.css'

export default function Panel (html) {
  const div = document.createElement('div')
  let cls = 'panel'

  if (html.length > 100) {
    cls += '-long'
  }

  div.className = css[cls]
  div.innerHTML = html
  return div
}
