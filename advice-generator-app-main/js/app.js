async function getPhrase() {
  let response = await fetch('https://api.adviceslip.com/advice')
  let data = await response.json()

  return data;
}

function appendPhraseToElm(phraseIdElm, phraseElm) {
  phraseIdElm.textContent = `ADVICE #`
  phraseElm.textContent = `...`

  getPhrase().then(({ slip }) => {
    const { id, advice } = slip
    phraseIdElm.textContent = `ADVICE #${id}`
    phraseElm.textContent = `\"${advice}\"`
  })
}
