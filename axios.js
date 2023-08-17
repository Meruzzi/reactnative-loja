import axios from 'axios'
const baseURL = 'https://projeto-000001-default-rtdb.firebaseio.com/'

const instance = axios.create({ baseURL })

instance.converter = (data) =>{
	const ids = Object.keys(data)
	const objs = Object.values(data)
	return objs.map((obj, i) =>{
		return { _id: ids[i], ...obj }
	})
}

export default instance;