import React from 'react'
import { Navigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'

interface IRoutesProps {
  children: any
}

export const PrivateRoute = ({ children }: IRoutesProps) => {
  const { questionary, id } = useParams()
  // console.log(id)
  return id && questionary ? children : <Navigate to="/" />
}