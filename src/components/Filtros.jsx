import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filtrar Gastos</label>
                <select
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                >
                    <option value="">-- Filtrador de gastos --</option>
                    <option value="ahorro">-- Ahorro --</option>
                    <option value="comida">-- Comida --</option>
                    <option value="impuestos">-- Impuestos --</option>
                    <option value="gastos">-- Gastos Varios --</option>
                    <option value="productos">-- Productos --</option>
                    <option value="salud">-- Salud --</option>
                    <option value="suscripciones">-- Suscripciones --</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros