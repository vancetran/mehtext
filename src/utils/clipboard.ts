export default function initializeCopyButton(
  buttonSelector: string,
  textFieldSelector: string
) {
  const buttonElement = document.querySelector(buttonSelector)
  const textFieldElement = document.querySelector(
    textFieldSelector
  ) as HTMLInputElement // https://github.com/microsoft/TypeScript/issues/10453

  if (buttonElement === null || textFieldElement === null) {
    console.log('error with copy button')
  } else {
    buttonElement.addEventListener('click', () => {
      navigator.clipboard
        .writeText(textFieldElement.value)
        .then(() => {
          console.log('Text copied.')
        })
        .catch(() => {
          console.log('Failed to copy text.')
        })
    })
  }
}
