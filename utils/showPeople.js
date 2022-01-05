export default function (people) {
  const result = people
    .map((item) => {
      return `<h4>${item.name}: <strong>${item.job.toUpperCase()}</strong></h4>`
    })
    .join('')

  return result
}
