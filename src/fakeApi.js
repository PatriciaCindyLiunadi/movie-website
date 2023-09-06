// fakeApi.js

const fakeApi = {
  login: (username, password) => {
    // Implementasi autentikasi sederhana.
    if (username === 'user' && password === 'password') {
      return {
        id: 1,
        username: 'user',
        name: 'Nama Pengguna',
      };
    } else {
      throw new Error('Login gagal: Username atau password salah.');
    }
  },

  getMovieList: () => {
    // Implementasi API palsu untuk daftar film.
    return [
      {
        id: 1,
        title: 'Movie 1',
        description: 'Deskripsi film 1',
        poster: 'link_ke_gambar_poster1.jpg',
      },
      // ... Tambahkan film lainnya di sini.
    ];
  },

  getMovieDetail: (movieId) => {
    // Implementasi API palsu untuk detail film berdasarkan ID.
    if (movieId === 1) {
      return {
        id: 1,
        title: 'Movie 1',
        description: 'Deskripsi film 1',
        poster: 'link_ke_gambar_poster1.jpg',
        // Informasi tambahan lainnya...
      };
    } else {
      throw new Error('Film tidak ditemukan.');
    }
  },
};

export default fakeApi;
