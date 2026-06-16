import { create } from 'zustand';

export const useFavoriteStore = create((set, get) => ({
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],

  toggleFavorite: (character) => {
    const { favorites } = get();
    const isFavorite = favorites.some((fav) => fav.id === character.id);
    
    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((fav) => fav.id !== character.id);
    } else {
      newFavorites = [...favorites, character];
    }
    
    set({ favorites: newFavorites });
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  },
}));