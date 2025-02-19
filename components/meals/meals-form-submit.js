'use client'

import { useFormStatus } from 'react-dom';


const MealsFormSubmit = () => {
  const status = useFormStatus();

  const { pending } = status

  return <button disabled={pending}>{
    pending ? 'Submitting...' : 'Share Meal'
  }</button>;
};

export default MealsFormSubmit;