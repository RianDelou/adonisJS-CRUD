/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router' // apenas bug visual se tiver dando erro

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

const ClientesController = () => import('#controllers/clientes_controller')
const ProfessorsController = () => import('#controllers/professors_controller')
const PsicologosController = () => import('#controllers/psicologos_controller')
const ProdutosController = () => import('#controllers/produtos_controller')

router.resource('clientes', ClientesController)
router.resource('professors', ProfessorsController)
router.resource('psicologos', PsicologosController)
router.resource('produtos', ProdutosController)
