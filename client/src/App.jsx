import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ num1: '', num2: '' })
  const [status, setStatus] = useState({ loading: false, message: '' })
  const [result, setResult] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    console.log(formData);
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, message: '' })

    try {
      const response = await fetch('http://localhost:8080/api/test/getResult', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          num1: Number(formData.num1),
          num2: Number(formData.num2),
        }),
      })

      if (!response.ok) {
        throw new Error('Error al enviar los datos')
      }

      const data = await response.json()
      setResult(data.result)
      setStatus({ loading: false, message: `El resultado es ${data.result}` })
    } catch (error) {
      setStatus({ loading: false, message: error.message })
    }
  }

  return (
    <div className="container">
      <h1>test</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="num1">
          Número 1
          <input
            id="num1"
            name="num1"
            type="number"
            value={formData.num1}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="num2">
          Número 2
          <input
            id="num2"
            name="num2"
            type="number"
            value={formData.num2}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={status.loading}>
          {status.loading ? 'Calculando…' : 'Calcular'}
        </button>
      </form>
      {status.message && <p className="status">{status.message}</p>}
      
    </div>
  )
}

export default App
