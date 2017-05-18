'use strict'

const store = require('../store')
const goals = require('../goals/events')

// Sign UP SUCCESS AND FAILURE MESSAGING ________________________
const signUpSuccess = (data) => {
  console.log('User sucessfully created:', data)
  console.log('Store looks like ', store)
  $('#sign-up').trigger('reset')
}

const signUpFailure = (error) => {
  if (error.error.responseText === '{"email":["has already been taken"]}') {
    console.log('email already taken')
    return
  }
  console.log('Store looks like ', store)
}

//  SIGN IN SUCCESS AND FAILURE MESSAGING ________________________
const signInSuccess = (data) => {
  console.log('signIn success ran, data is: ', data)
  store.user = data.user
  console.log('Store looks like ', store)
  $('#sign-in').trigger('reset')
  signInSuccessRenderUI()
  goals.onGetGoals()
}

const signInFailure = (error) => {
  console.error('signIn error ran, error is: ', error)
  console.log(error.statusText)
  console.log('Store looks like ', store)
}

//  Change Password SUCCESS AND FAILURE MESSAGING ______________________________

const changePasswordSuccess = (data) => {
  console.log('Password was succesfully changed, data is: ', data)
  console.log('Store looks like ', store)
  $('#change-password').trigger('reset')
}

const changePasswordFailure = (error) => {
  console.log('Password was not succesfully changed', error)
  console.log('Store looks like ', store)
}

//  SIGN OUT SUCCESS AND FAILURE MESSAGING ______________________

const signOutSuccess = () => {
  console.log('signOut success ran, and nothing was returned')
  console.log('Store looks like ', store)

  store.user = null
  store.user_ratings = null

  console.log('Store looks like ', store)
  signOutSuccessRenderUI()
}

const signOutFailure = (error) => {
  console.error('signOut error ran, error is: ', error)
  console.log('Store looks like ', store)
}

const signInSuccessRenderUI = function ()  {
  $('form').hide()
  $('.hide-on-initial-load').show()
  $('.hide-on-sign-in').hide()
  $('#map').show()
}

const signOutSuccessRenderUI = function ()  {
  $('form').hide()
  $('.hide-on-initial-load').hide()
  $('.hide-on-sign-in').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutFailure,
  signOutSuccess,
  changePasswordFailure,
  changePasswordSuccess
}
