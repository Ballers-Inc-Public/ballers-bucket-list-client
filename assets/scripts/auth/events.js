'use strict'
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// SIGNUP FUNCTIONALITY LAUNCHED WHEN CLICKED IN MODAL___________________
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // Criteria Check

// Blank Field Check
  if (
    data.credentials.password === '' || data.credentials.password_confirmation === '' || data.email === '') {
    $('#sign-up-blank-field-failure-alert').show()
    return
  }

// Password Match Check
  if (data.credentials.password !== data.credentials.password_confirmation) {
    // console.log('Your passwords do not match')
    $('#sign-up-password-failure-alert').show()
    return
  }

// Create User API request
  api.signUp(data)
  .then(ui.signUpSuccess)
  .catch(ui.signUpFailure)
  // if Sign up works then we will run the sign in API call to skip that step
  .then(() => {
    console.log('this is what is passed', data)
    api.signIn(data)
      .then(ui.signInSuccess)
      .catch(ui.signInFailure)
  })
}

// SIGNIN FUNTIONALITY LAUNCHED WHEN CLICKED IN MODAL___________________
const onSignIn = function (event) {
  event.preventDefault()
  // console.log('Sign In run')
  const data = getFormFields(this)
  // Criteria Check

// Blank Field Check
  if (
    data.credentials.email === '' || data.credentials.password === '') {
    $('#sign-in-blank-field-failure-alert').show()
    return
  }
  console.log('this is what is passed to sign in', data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// CHANGE PASSWORD FUNTIONALITY LAUNCHED WHEN CLICKED IN MODAL___________________
const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('Changing password run')
  const data = getFormFields(this)

  if (
    data.passwords.old === '' || data.passwords.new === '') {
    $('#change-pass-blank-field-failure-alert').show()
    // console.log('No blank fields accepted')
    return
  }

  if (
    data.passwords.old === data.passwords.new) {
    $('#change-pass-same-password-failure-alert').show()
    // console.log('same password')
    return
  }

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// SIGNOUT FUNCTION EXECUTED WHEN BUTTON CLICKED___________________
const onSignOut = function (event) {
  event.preventDefault()
  // console.log('Sign out run')
  if (store.user === undefined) {
    // console.log('Not signed In')
    return
  }
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// HANDLER TO ASSIGN AUTHORIZATION FUNCTIONS TO OBJECTS___________________
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
