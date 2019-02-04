export const login = (user) => ({
  type: 'LOGIN', 
  user: user 
})

export const error = (message) => ({
  type: 'ERROR', 
  message: message
})

export const signout = () => ({
  type: 'SIGNOUT'
})