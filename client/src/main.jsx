import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from './redux/store.js'
import { fetchDirectors } from './redux/directorSlice.js'
import { fetchActors } from './redux/actorSlice.js'
import { fetchMovies } from './redux/movieSlice.js'

store.dispatch(fetchDirectors());
store.dispatch(fetchActors());
store.dispatch(fetchMovies());

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
