import FormComponent from '../features/form/form.component';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='container'>
      <h2>Decouped Form</h2>

      <div className='form-container'>
        <FormComponent />
      </div>
    </div>
  );
};

export default Home;
