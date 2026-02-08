// API Service Interface - Clean Architecture
// Abstract API calls through interfaces, keeping external details separate

import axios from 'axios';
import API_CONFIG from './config';

// Create axios instance with base configuration
const apiClient = axios.create({
    baseURL: API_CONFIG.BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Request interceptor - adds auth token
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Response interceptor - handles errors
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// ============================================
// AUTH SERVICE INTERFACE
// ============================================
export const AuthService = {
    login: async (email, password) => {
        const response = await apiClient.post(API_CONFIG.AUTH.LOGIN, { email, password });
        return response.data;
    },

    register: async (username, email, password) => {
        const response = await apiClient.post(API_CONFIG.AUTH.REGISTER, { username, email, password });
        return response.data;
    },

    getMe: async () => {
        const response = await apiClient.get(API_CONFIG.AUTH.ME);
        return response.data;
    }
};

// ============================================
// ITEMS SERVICE INTERFACE
// ============================================
export const ItemsService = {
    getAll: async () => {
        const response = await apiClient.get(API_CONFIG.ITEMS.LIST);
        return response.data;
    },

    getById: async (id) => {
        const response = await apiClient.get(API_CONFIG.ITEMS.GET(id));
        return response.data;
    },

    create: async (itemData) => {
        const response = await apiClient.post(API_CONFIG.ITEMS.CREATE, itemData);
        return response.data;
    },

    update: async (id, itemData) => {
        const response = await apiClient.put(API_CONFIG.ITEMS.UPDATE(id), itemData);
        return response.data;
    },

    delete: async (id) => {
        const response = await apiClient.delete(API_CONFIG.ITEMS.DELETE(id));
        return response.data;
    }
};

// ============================================
// DECISIONS SERVICE INTERFACE
// ============================================
export const DecisionsService = {
    create: async (itemId, action) => {
        const response = await apiClient.post(API_CONFIG.DECISIONS.CREATE, { itemId, action });
        return response.data;
    },

    getHistory: async () => {
        const response = await apiClient.get(API_CONFIG.DECISIONS.LIST);
        return response.data;
    }
};

// ============================================
// DASHBOARD SERVICE INTERFACE
// ============================================
export const DashboardService = {
    getStats: async () => {
        const response = await apiClient.get(API_CONFIG.DASHBOARD.STATS);
        return response.data;
    },

    getHistory: async () => {
        const response = await apiClient.get(API_CONFIG.DASHBOARD.HISTORY);
        return response.data;
    }
};

export default apiClient;
