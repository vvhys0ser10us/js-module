function get(selection) {
  const element = document.querySelector(selection)
  if (element) {
    return element
  } else {
    throw Error('NO SUCH SELECTION!')
  }
}

export default get
