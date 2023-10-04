import { jest } from '@jest/globals'

const axios = {
  post: jest.fn((url, data) => {
    if (url === 'http://localhost:8080/api/users') {
      if (data.email !== 'existente@gmail.com') {
        return Promise.resolve({
          data: {
            message: 'Cadastro realizado com sucesso!'
          }
        })
      } else {
        return Promise.resolve({
          data: {
            message: 'Este e-mail já está cadastrado no sistema'
          }
        })
      }
    }
  }),

  create: () => axios
}

export default axios
