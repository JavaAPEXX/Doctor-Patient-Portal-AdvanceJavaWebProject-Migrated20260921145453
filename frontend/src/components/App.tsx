import React from 'react';
import CommentForm from './components/CommentForm';
import CommentService from './services/CommentService';
import AppointmentApi from './api/AppointmentApi';

const App = () => {
  const [id, setId] = React.useState(1);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await CommentService.createComment({
        id,
        fullName: '',
        age: '',
        phone: '',
        diseases: '',
        comment: '',
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <CommentForm id={id} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;