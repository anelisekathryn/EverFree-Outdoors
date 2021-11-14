import { Router } from 'express'
import productsRoutes from './products.js'
import usersRoutes from './users.js'

const router = router()

router.get('/', (req, res) => res.send('This is the api root'))

router.use('/', userRoutes)
router.use('/', productsRoutes)

export default router