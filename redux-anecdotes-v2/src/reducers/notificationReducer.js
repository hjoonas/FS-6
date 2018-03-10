const initialNotification = 'Vote by clicking the vote button'
let timer = null

const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
          return action.notification
        case 'DELETE_NOTIFICATION':
          return initialNotification
        default:
          return state
      }
}
  
export const notificationChange = (notification, newTimer) => {
  clearTimeout(timer)
  timer = newTimer
  return {
      type: 'SET_NOTIFICATION',
      notification
  }
}

export const timerNotification = () => {
  return {
    type: 'DELETE_NOTIFICATION'
  }
}
  
export default notificationReducer