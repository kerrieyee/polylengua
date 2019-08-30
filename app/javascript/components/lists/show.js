import React from 'react'
import { useAppContext } from '../../hooks/appContext'
import Table from '../generic/table'

const ListsShow = () => {
  const { state } = useAppContext()

  if (!state.listWords || !state.listWords.words) {
    return (<div> No words in this list! </div>)
  }

  const words = state.listWords.words
  const infinitives = words.infinitves.map(infinitive => {
    return({id: infinitive.id, noun: infinitive.word, translation: infinitive.eng_translation})
  })
  const nouns = words.nouns.map(noun => {
    return({id: noun.id, noun: noun.word, gender: noun.gender, translation: noun.eng_translation})
  })

  return (
    <div>
      <Table title='Nouns' arr={nouns}/>
      <Table title='Infinitives' arr={infinitives}/>
    </div>
  )
}

export default ListsShow
