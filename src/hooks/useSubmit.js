import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It calls submitFn if available, otherwise it uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (submitFn = null, data) => {
    setLoading(true);
    try {
      await wait(500);
      if (typeof submitFn === 'function') await submitFn(data)
      else {
        const random = Math.random();
        if (random < 0.5) {
          throw new Error("Something went wrong");
        }
      }
      setResponse({
        type: 'success',
        message: 'Successfully submitted data.'
      })
    } catch (error) {
      console.log(error)
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
