import create from 'zustand';

const useStore = create(set => ({

  musicList: [],
  setMusicList: (list) => set(state => ({ musicList: list })),

  currentMusic: null,
  setCurrentMusic: (music) => set(state => ({ currentMusic: music })),

  borderGlow: 'grey',
  setBorderGlow: (color) => set(state => ({ borderGlow: color })),

}));

export default useStore;