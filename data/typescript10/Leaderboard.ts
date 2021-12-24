import axios from 'axios';

import { baseUrl } from './Shared';

const API = axios.create({ baseURL: baseUrl });

export const getLeaderboardData = () => API.get(`/leaderboard/rankings`);
export const signup = (data: any) => API.post(`/club/member/new/member`, data);
