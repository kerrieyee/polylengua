import React from 'react'
import { useAppContext } from '../../hooks/appContext'

const ListsShow = () => {
  const { state } = useAppContext()

  if (!state.listWords || !state.listWords.words) {
    return (<div> No words in this list! </div>)
  }

  const words = state.listWords.words
  const infinitives = words.infinitves
  const nouns = words.nouns

  let nounTable
  let infinitiveTable

  if (infinitives && infinitives.length) {
    infinitiveTable = (
      <div>
        <h2> Infinitives </h2>
        <table>
          <thead>
            <tr>
              <th>Infinitive</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {infinitives.map(infinitive => (
              <tr key={infinitive.id}>
                <td>{infinitive.word}</td>
                <td>{infinitive.eng_translation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>)
  }

  if (nouns && nouns.length) {
    nounTable = (
      <div>
        <h2> Nouns </h2>
        <table>
          <thead>
            <tr>
              <th>Noun</th>
              <th>Gender</th>
              <th>Translation</th>
            </tr>
          </thead>
          <tbody>
            {nouns.map(noun => (
              <tr key={noun.id}>
                <td>{noun.word}</td>
                <td>{noun.gender}</td>
                <td>{noun.eng_translation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>)
  }

  return (
    <div>
      {nounTable}
      {infinitiveTable}
    </div>
  )
}

export default ListsShow
