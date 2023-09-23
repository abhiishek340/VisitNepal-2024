import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import travelData from '../data/travels.js' 

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(travelData) 
})

router.get('/:travelId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/public/travel.html')) 
})

export default router
