import React from 'react'
import * as S from './styles'
import { AiOutlineUser } from 'react-icons/ai'
import { BiLockAlt } from 'react-icons/bi'

interface IInputProps {
  placeholder: string
  value?: string
  type: string
}

export const Input = ({
  placeholder,
  value,
  type,
}: IInputProps) => {
  return (
    <S.Container>
      {type === 'text' ? (
        <AiOutlineUser size={25} color={'#b9b7b7'} />
      ) : (
        <BiLockAlt size={25} color={'#b9b7b7'} />
      )}

      <input type={type} placeholder={placeholder} value={value} />
    </S.Container>
  )
}

