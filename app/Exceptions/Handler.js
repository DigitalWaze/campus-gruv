'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {

  async handle (error, { request, response }) {
    response.status(error.status).send({message: error.message})
  }

  async report (error, { request }) {
  }
}

module.exports = ExceptionHandler
