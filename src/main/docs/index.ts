import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Cervejaria Dona Dulcy',
    description: 'Essa é a documentação da API feita pelo Emerson Antonio, para a Cervejaria Dona Dulcy',
    version: '1.0.0',
    contact: {
      name: 'Emerson Antonio',
      email: 'emerson.antonio.architect@gmail.com',
      url: 'https://www.linkedin.com/in/emersonia/'
    },
    license: {
      name: 'GPL-3.0-or-later',
      url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
    }
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  paths,
  schemas,
  components
}
