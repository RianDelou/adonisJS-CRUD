import Produto from '#models/produto'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProdutosController {
  async index({}: HttpContext) {
    const produto = await Produto.all() // CRUD "R" -> READ PARA PRODUTOS
    return produto
  }

  async store({}: HttpContext) {
    const produto = await Produto.create({
      // CRUD "C" -> CREATE PARA  PRODUTOS
      nome: 'ebook',
      valor: 59,
    })
    console.log(produto.$isPersisted)
    return produto
  }

  async show({}: HttpContext) {
    const produto = await Produto.find(1) // mostrar o produto
    return produto
  }

  async edit({}: HttpContext) {}

  async update({}: HttpContext) {
    const produto = await Produto.findOrFail(1) // CRUD "U" -> UPDATE PARA  PRODUTOS
    produto.nome = 'camisa'
    produto.valor = 150
    console.log('update!')
    await produto.save()
  }

  async destroy({}: HttpContext) {
    const produto = await Produto.findOrFail(1) // CRUD "D" -> DELETE PARA  PRODUTOS
    await produto.delete()

    console.log('delete!')
  }
}