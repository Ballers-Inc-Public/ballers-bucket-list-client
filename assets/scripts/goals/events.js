'use strict'
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// Pull Goal List___________________
const onGetGoals = function (event) {
  event.preventDefault()
  const data = getFormFields(this)

// API request for index all
  api.signUp(data)
  .then(ui.signUpSuccess)
  .catch(ui.signUpFailure)
}

// Pull single goal___________________
const onGetSingleGoal = function (event) {
  event.preventDefault()
  // console.log('Sign In run')
  const data = getFormFields(this)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// On Create Goal
const onCreateGoal = function (event) {
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


// On Update goal___________________
const onUpdateGoal = function (event) {
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

// On Delete Goal
const onDeleteGoal = function (event) {
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
