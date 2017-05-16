'use strict'

const config = require('../config.js')
const store = require('../store')

// GET request to the API to retrieve all goals for the current user
const getGoals = function () {
  return $.ajax({
    url: config.apiOrigin + '/goals',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// POST request to the API to create a goal for the current user
const createGoal = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/goals',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  getGoals,
  createGoal
}
