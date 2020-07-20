import axios from 'axios';

export default {
    getUsers: () => axios.get('/api/profile')
}