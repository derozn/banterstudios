export const success = ({ data = {} }) => ({
  status: 200,
  data
})

export const notFound = ({ error = 'Not Found', message = 'missing' }) => ({
  status: 404,
  error,
  message
})

export const badRequest = ({ error = 'Bad Request', message = 'bad request' }) => ({
  status: 400,
  error,
  message
})

export const badImplementation = ({ error = 'Internal Server Error', message = 'An internal server error occurred' }) => ({
  status: 500,
  error,
  message
})

export const tooManyRequests = ({ error = 'Too Many Requests', message = 'You have exceeded your request limit' }) => ({
  status: 429,
  error,
  message
})
