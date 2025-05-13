import { render, screen } from '@testing-library/react'
import React from 'react'
import Calculadora from '../components/Calculadora'

test('renderiza os inputs', () => {
    render(<Calculadora />)
    const input1 = screen.getByPlaceholderText('Digite o primeiro número')
    const input2 = screen.getByPlaceholderText('Digite o segundo número')

    expect(input1).toBeInTheDocument()
    expect(input2).toBeInTheDocument()
})

test('renderiza os botões', () => {
    render(<Calculadora />)
    const somarbutton = screen.getByText('Somar')
    const subbutton = screen.getByText('Subtrair')
    const multibutton = screen.getByText('Multiplicar')
    const dividbutton = screen.getByText('Dividir')

    expect(somarbutton).toBeInTheDocument()
    expect(subbutton).toBeInTheDocument()
    expect(multibutton).toBeInTheDocument()
    expect(dividbutton).toBeInTheDocument()
})

test('exibe o parágrafo de resultado', () => {
    render(<Calculadora />)
    const p = screen.getByText('Resultado:')

    expect(p).toBeInTheDocument()
})