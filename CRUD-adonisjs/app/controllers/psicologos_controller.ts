import Psicologo from '#models/psicologo'
import type { HttpContext } from '@adonisjs/core/http'

export default class PsicologosController {
  async index({}: HttpContext) {
    const psicologo = await Psicologo.all() // CRUD "R" -> READ PARA PSICOLOGO
    return psicologo
  }

  async store({}: HttpContext) {
    const psicologo = await Psicologo.create({
      // CRUD "C" -> CREATE PARA PSICOLOGO
      nome: 'batataPsicologo',
      especializacao: 'em jovens',
    })
    console.log(psicologo.$isPersisted)
    return psicologo
  }

  async show({}: HttpContext) {
    const psicologo = await Psicologo.find(1) // mostrar o psicologo
    return psicologo
  }

  async edit({}: HttpContext) {}

  async update({}: HttpContext) {
    const psicologo = await Psicologo.findOrFail(1) // CRUD "U" -> UPDATE PARA PSICOLOGO
    psicologo.nome = 'alberto'
    console.log('update!')
    await psicologo.save()
  }

  async destroy({}: HttpContext) {
    const psicologo = await Psicologo.findOrFail(1) // CRUD "D" -> DELETE PARA PSICOLOGO
    await psicologo.delete()

    console.log('delete!')
  }
}
