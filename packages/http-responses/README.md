# `@banterstudiosuk/http-responses`

> Simple middleware for express to send back http responses

## Install

### npm

```bash
npm i --save @banterstudiosuk/http-responses
```

## Usage

```js
import express from 'express'
import httpResponses from '@banterstudiosuk/http-responses'

const app = express()
const router = express.Router()

app.use(httpResponses())

router.post('/', (req, res) => {
  res.httpResponse.success()
})

// Catch all
app.use((err, req, res) => {
  res.httpResponse.badImplementation({
    error: err.stack,
    message: err.message
  })
})

```

## License

MIT