import { create } from "zustand";
import { api } from "../../../common/services/api";

export const useCharacterStore = create((set, get) => ({
  characters: [],
  currentPage: 1,
  info: null,
  filters: { name: "", status: "", gender: "" },
  isLoading: false,

  fetchCharacters: async (page = 1) => {
    // Si ya está cargando, evitamos peticiones duplicadas
    if (get().isLoading) return;
    set({ isLoading: true, currentPage: page });
    const { filters } = get();

    try {
      const response = await api.get("/character/", {
        params: { page, ...filters },
      });
      set({
        characters: response.data.results || [],
        info: response.data.info,
        isLoading: false,
      });
    } catch (error) {
      set({ characters: [], info: null, isLoading: false });
    }
  },

  fetchCharacterById: async (id) => {
    set({ isLoading: true });
    try {
      const response = await api.get(`/character/${id}`);
      set({ selectedCharacter: response.data, isLoading: false });
    } catch (error) {
      console.error("Error fetching character:", error);
      set({ isLoading: false });
    }
  },

  setFilters: (newFilters) => {
    const { filters } = get();
    const nextFilters = { ...filters, ...newFilters };
    if (JSON.stringify(filters) === JSON.stringify(nextFilters)) return;

    set({ filters: nextFilters, currentPage: 1 });
    get().fetchCharacters(1);
  },
}));
