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
// On Update goal___________________
const onUpdateGoal = function (event) {
  event.preventDefault()
  // console.log('Changing password run')
  const data = getFormFields(this)

  // checking if the title/status fields are populted
  if (
    data.goals.title === '' || data.goals.status === '') {
// TODO need to add error message here, waiting on a spot in HTML
    $('#change-pass-blank-field-failure-alert').show()
    // console.log('No blank fields accepted')
    return
  }

  api.updateGoal(data)
    .then(ui.updateGoalSucess)
    .catch(ui.failure)
}

// On Delete Goal
const onDeleteGoal = function (event) {
  event.preventDefault()
  // HOW DOES THE FUNCTION GET THE ID OF THE GOAL
  let id
  api.deleteGoal(id)
    .then(ui.deleteGoalSuccess)
    .catch(ui.failure)
}
// HANDLER TO ASSIGN AUTHORIZATION FUNCTIONS TO OBJECTS___________________
const addHandlers = () => {
  // $('#sign-up').on('submit', onSignUp)
  // $('#sign-in').on('submit', onSignIn)
  // $('#change-password').on('submit', onChangePassword)
  // $('#sign-out').on('click', onSignOut)
}

module.exports = {
  addHandlers,
  onDeleteGoal,
  onUpdateGoal,
  onCreateGoal,
  onGetGoals
}
