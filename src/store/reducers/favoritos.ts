import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoListType = {
  itens: Produto[]
}

const initialState: FavoritoListType = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    addFavorito: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload
      if (state.itens.find((p) => p.id === favorito.id)) {
        const retiraProduto = state.itens.filter((p) => p.id !== favorito.id)
        state.itens = []
        retiraProduto.map((p) => state.itens.push(p))
      } else {
        state.itens.push(favorito)
      }
    }
  }
})
export const { addFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
