import dotenv from 'dotenv'
import { startServer } from './config'
import { routes } from './routes'

dotenv.config()
const { PORT } = process.env

// connectDataBase(String(DATA_BASE))

startServer(PORT || '8000', routes)
