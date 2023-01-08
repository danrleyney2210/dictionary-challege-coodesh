import React from 'react'
import Button from '../../components/atoms/Button'
import { Input } from '../../components/atoms/Input'
import Logo from '../../assets/img/logo2.png'
import * as S from './styles'

export const Login = () => {
  return (
    <S.Contianer>
      <S.Content>

        <S.LefContent>
          <div>
            <h1>Seja Bem vindo</h1>
            <p>Acesse seu login aqui na coodesh </p>
          </div>
        </S.LefContent>
        <S.RightContent>
          <S.ContentLogo>
            <img src={Logo} alt={'Logo'} width={130} />
          </S.ContentLogo>

          <S.ContentForm>

            <Input type='text' placeholder='Nome' />
            <Input type='password' placeholder='Senha' />
            <Button />
          </S.ContentForm>
        </S.RightContent>

      </S.Content>
    </S.Contianer>
  )
}

