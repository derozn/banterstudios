import * as payloads from './payloads'

export default () => (_, res, next) => {
  if (res.httpResponse) {
    throw new Error('http-response already exists on the response object')
  }

  res.httpResponse = Object.keys(payloads)
    .reduce((acc, key) => ({
      ...acc,
      [key]: (...params) => {
        const payload = payloads[key].apply(payloads, params)
        return res.status(payload.status).send(payload)
      }
    }), {})

  next()
}
