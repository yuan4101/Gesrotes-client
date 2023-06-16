import axios from 'axios'

const gesrotesApi = axios.create(
  {
    baseURL: 'http://localhost:3000'
  }
)

export const getAsignaturas = async () => {
  const res = await gesrotesApi.get('/asignaturas')
  return res.data;
}

export const getAsignaturaById = async (asignaturaId) => {
  const res = await gesrotesApi.get(`/asignaturas/${asignaturaId}`)
  console.log(res.data);
  return res.data;
}

export const getCarreraById = async (carreraId) => {
  const res = await gesrotesApi.get(`/carreras/${carreraId}`);
  return res.data; 
};


