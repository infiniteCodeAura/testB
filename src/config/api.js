// API Configuration
const API_BASE_URL = 'https://deploy-7fn8.onrender.com';

// API Endpoints
export const API_ENDPOINTS = {
  // v0 endpoints (guest/public)
  v0: {
    products: `${API_BASE_URL}/api/v0/products`,
    contact: `${API_BASE_URL}/api/v0/contact`,
  },
  // v1 endpoints (user auth)
  v1: {
    base: `${API_BASE_URL}/api/v1`,
    signup: `${API_BASE_URL}/api/v1/user/signup`,
    login: `${API_BASE_URL}/api/v1/user/login`,
    profile: `${API_BASE_URL}/api/v1/user/profile/`,
  },
  // v2 endpoints (products)
  v2: {
    base: `${API_BASE_URL}/api/v2`,
    products: `${API_BASE_URL}/api/v2/products`,
  },
  // v3 endpoints (cart, orders, payment)
  v3: {
    base: `${API_BASE_URL}/api/v3`,
    cart: {
      list: `${API_BASE_URL}/api/v3/user/cart/list`,
      flush: `${API_BASE_URL}/api/v3/user/cart/flush`,
    },
    payment: {
      khaltiVerify: `${API_BASE_URL}/api/v3/payment/khalti/verify`,
    },
  },
};

export default API_BASE_URL;
