import Professor from '#models/professor'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProfessorsController {
  async index({}: HttpContext) {
    const professor = await Professor.all() // CRUD "R" -> READ PARA PROFESSOR
    return professor
  }

  async store({}: HttpContext) {
    const professor = await Professor.create({
      // CRUD "C" -> CREATE PARA PROFESSOR
      nome: 'lucas',
      diploma: true,
    })
    console.log(professor.$isPersisted)
    return professor
  }

  async show({}: HttpContext) {
    const professor = await Professor.find(1) // mostrar o professor
    return professor
  }

  async edit({}: HttpContext) {}

  async update({}: HttpContext) {
    const professor = await Professor.findOrFail(1) // CRUD "U" -> UPDATE PARA PROFESSOR
    professor.nome = 'CARAMBAAA!! ELE N TEM DIPLOMA N TEM NOME TB'
    professor.diploma = false
    console.log('update!')
    await professor.save()
  }

  async destroy({}: HttpContext) {
    const professor = await Professor.findOrFail(1) // CRUD "D" -> DELETE PARA PROFESSOR
    await professor.delete()

    console.log('delete!')
  }
}
