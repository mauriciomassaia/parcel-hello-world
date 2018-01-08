import panel from './panel'
import './index.css'

const title = document.createElement('h1')
title.innerHTML = 'Hello Parcel World.'
document.body.appendChild(title)

const t = [
  'Consectetur sunt sunt deserunt commodo aliqua est irure fugiat aliqua irure consectetur. Veniam reprehenderit reprehenderit et ea aliquip anim excepteur magna et nisi ad quis dolor. Lorem amet velit exercitation quis mollit ipsum ea in. Ea nostrud proident est quis incididunt quis. Nostrud esse ex pariatur non dolore officia aute do. Sunt dolor enim qui occaecat exercitation consequat anim dolor in cillum ea elit veniam. Qui anim voluptate ipsum voluptate.',
  'Nisi voluptate ipsum laboris velit.'
]

for (let p, i = 0; i < 10; i++) {
  p = panel(t[i % t.length])
  document.body.appendChild(p)
}
