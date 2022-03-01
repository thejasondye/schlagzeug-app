import create from 'zustand';

const useStore = create(set => ({

  musicList: [],
  setMusicList: (list) => set({ musicList: list }),

  currentMusic: null,
  setCurrentMusic: (music) => set({ currentMusic: music }),

}));

export default useStore;