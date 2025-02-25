
import React, { useState } from 'react';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import axios from "axios"


function AucPage() {


  const navigate = useNavigate();
  const [values, setValues] = useState({
    otp: "",

  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {

    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/verify_email/`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      if (response.status === 200) {
        toast.done("Código verificado");
        navigate("/login");
      }

    } catch (error) {
      if (error.response) {
        const resultado = error.response.data;
        toast.warning(resultado.message);
      }
    }




  }







  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">

            <form class="space-y-4 md:space-y-6" action="#" onSubmit={(event) => handleSubmit(event)}>

              <div>


                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ingresa el codigo de verificacion</label>
                <input type="password" name="otp" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e) => handleChange(e)} />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                  </div>

                </div>
              </div>
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Verificar codigo</button>

            </form>
          </div>
        </div>
      </div>
    </section>

  )
}
export default AucPage;