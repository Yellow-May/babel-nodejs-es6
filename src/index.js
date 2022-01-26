/* eslint-disable no-console */
import express from 'express'
import { exit } from 'process'
import config from 'config'

const app = express()

app.get('/', (_req, res) => res.send('Hello Server'))

const start = async () => {
   try {
      app.listen(config.get('port'), () => console.warn('Server listening'))
   } catch (error) {
      console.warn(error)
      exit(1)
   }
}

start()
