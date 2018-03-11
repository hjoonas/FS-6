import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  if (action.type==='VOTE') {
    const old = state.filter(a => a.id !==action.id)
    const voted = state.find(a => a.id === action.id)

    return [...old, { ...voted, votes: voted.votes+1} ]
  }
  if (action.type === 'CREATE') {
    return [...state, { 
      content: action.newAnecdote.content,
      id: action.newAnecdote.id,
      votes: 0
    }]
  }
  if (action.type === 'INIT_ANECDOTE') {
    return action.anecdotes
  }

  return state
}

export const initializeAnecdote = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({ 
      type: 'INIT_ANECDOTE', 
      anecdotes 
    })
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({ 
      type: 'CREATE', 
      newAnecdote
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.update({...anecdote, votes: anecdote.votes +1})
    dispatch({ 
      type: 'VOTE', 
      id: newAnecdote.id
    })
  }
}

export default anecdoteReducer