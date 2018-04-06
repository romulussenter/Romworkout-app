import axios from 'axios';

export const workoutsRouters=(exercises) => {
    const url = `/exercises`;
    return axios.get(url);
}