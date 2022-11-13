import { writable } from 'svelte/store'

// Stores each To-Do list item
export const items = writable([
  {
    id: 1,
    text: 'hello',
    completed: false,
  },
  {
    id: 2,
    text: 'hel343lo',
    completed: true,
  },
])
