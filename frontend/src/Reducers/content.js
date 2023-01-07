import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui'
import { BASE_URL } from 'utils/utils';

export const content = createSlice({
  name: 'content',
  initialState: {
    title: '',
    image: '',
    text: '',
    link: '',
    tag: '',
    isLoading: false,

  },
  reducers: {
    setTitle: (store, action) => {
      store.title = action.payload
      console.log(store.title)
    },
    setImage: (store, action) => {
      store.image = action.payload
      console.log(store.image)
    },
    setText: (store, action) => {
      store.text = action.payload
      console.log(store.text)
    },
    setTag: (store, action) => {
      store.tag = action.payload
      console.log(store.tag)
    },
    setLink: (store, action) => {
      store.link = action.payload
      console.log(store.link)
    }
  }
});

// First thunk, to start the game

export const fetchPhotos = () => {
  return (dispatch, getState) => {
    dispatch(ui.actions.setLoading(true));

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: getState().content.username
      })
    }

    fetch('https://labyrinth.technigo.io/start', options)
      .then((res) => res.json())
      .then((data) => {
        dispatch(content.actions.setLocation(data))
        dispatch(content.actions.setCoordinates(content.coordinates))
      })
      .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000))
  }
}

// // Second thunk, to proceed in the game

// export const navigateGame = () => {
//   return (dispatch, getState) => {
//     dispatch(ui.actions.setLoading(true))
//     fetch('https://labyrinth.technigo.io/action', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         username: getState().game.username,
//         type: 'move',
//         direction: getState().game.step
//       })
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch(game.actions.setLocation(data))
//         dispatch(game.actions.setCoordinates(game.coordinates))
//       })
//       .finally(setTimeout(() => dispatch(ui.actions.setLoading(false)), 2000))
//   }
// }
