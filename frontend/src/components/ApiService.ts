import axios from 'axios';

interface ResponseData {
  errorMsg: string;
}

const ApiService = {
  getFooterData: async () => {
    try {
      const response = await axios.get('/adminLogin');
      return response.data;
    } catch (error) {
      return { errorMsg: 'Failed to fetch footer data' };
    }
  },
};

export default ApiService;