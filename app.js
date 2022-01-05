import { people } from './utils/data.js'
import get from './utils/get.js'
import showPeople from './utils/showPeople.js'

const btn = get('.btn')
const container = get('.container')

btn.addEventListener('click', () => {
  container.innerHTML = showPeople(people)
})
