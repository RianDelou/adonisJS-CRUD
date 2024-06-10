import Cliente from '#models/cliente'
import type { HttpContext } from '@adonisjs/core/http' // apenas bug visual se tiver dando erro

export default class ClientesController {
  async index({}: HttpContext) {
    const cliente = await Cliente.all() // CRUD "R" -> READ PARA CLIENTES
    return cliente
  }

  async store({}: HttpContext) {
    const cliente = await Cliente.create({
      // CRUD "C" -> CREATE PARA CLIENTES
      nome: 'rlanz',
      email: 'romain@adonisjs.com',
      senha: '123456',
    })

    console.log(cliente.$isPersisted)
    return cliente
  }

  async show({}: HttpContext) {
    const cliente = await Cliente.find(1) // mostrar o cliente
    return cliente
  }

  async edit({}: HttpContext) {}

  async update({}: HttpContext) {
    const cliente = await Cliente.findOrFail(7) // CRUD "U" -> UPDATE PARA CLIENTES
    cliente.nome = 'BETO!!'
    console.log('update!')
    await cliente.save()
  }

  async destroy({}: HttpContext) {
    const cliente = await Cliente.findOrFail(3) // CRUD "D" -> DELETE PARA CLIENTES
    await cliente.delete()

    console.log('delete!')
  }
}
