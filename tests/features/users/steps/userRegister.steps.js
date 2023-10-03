import { mount } from '@vue/test-utils'
import { defineFeature, loadFeature } from 'jest-cucumber'
import { expect } from '@jest/globals'
import App from '@/App.vue'

const feature = loadFeature('tests/features/users/userRegister.feature')

defineFeature(feature, (test) => {
  test('Cadastro realizado com sucesso', ({ given, when, and, then }) => {
    const screen = mount(App)
    given('estou na tela de cadastro do sistema', () => {
      expect(screen.text()).toContain('Cadastre-se no sistema')
    })

    when('preencho o email', async () => {
      const emailInput = screen.find('input#email')
      await emailInput.setValue('meuemail@gmail.com')
    })

    and('digito a senha', async () => {
      const passwordInput = screen.find('input#password')
      await passwordInput.setValue('abc123!@#')
    })

    and('salvo', async () => {
      const submitButton = screen.find('button#save')
      await submitButton.trigger('submit')
    })

    then('o sistema apresenta a mensagem de sucesso', () => {
      expect(screen.text()).toContain('Cadastro realizado com sucesso!')
    })
  })

  test('Cadastro não realizado - e-mail já cadastrado', ({ given, when, and, then }) => {
    given('estou na tela de cadastro do sistema', () => {
      //
    })

    when(/^preencho meu email com "(.*)"$/, (arg0) => {
      //
    })

    and('digito a senha', () => {
      //
    })

    and('salvo', () => {
      //
    })

    then('o sistema apresenta a mensagem de falha', () => {
      //
    })
  })
})
