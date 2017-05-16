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
  .then(ui.getGoalsSuccess)
  .catch(ui.Failure)
}

// On Create Goal
const onCreateGoal = function (event) {
  event.preventDefault()
  if (store.user === undefined) {
    // console.log('Not signed In')
    return
  }
  // console.log('Sign out run')
  const userId = store.user.id
  const data = {
    goal: {
      title: data.title,
      status: status,
      user_id: userId
    }
  }
  api.createGoal(data)
    .then(ui.createGoalSuccess)
    .catch(ui.Failure)
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
