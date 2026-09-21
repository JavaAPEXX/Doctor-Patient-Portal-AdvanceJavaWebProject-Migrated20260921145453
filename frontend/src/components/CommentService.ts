import axios from 'axios';

interface CommentData {
  id: number;
  fullName: string;
  age: string;
  phone: string;
  diseases: string;
  comment: string;
}

interface CommentResponse {
  message: string;
}

const CommentService = {
  async getAppointmentData(id: number): Promise<CommentData> {
    try {
      const response = await axios.get(`/api/appointments/${id}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },

  async createComment(commentData: CommentData): Promise<CommentResponse> {
    try {
      const response = await axios.post('/api/comments', commentData);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default CommentService;