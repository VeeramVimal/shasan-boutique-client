"use client";

function SignUp() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <img
                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                className="w-32 mx-auto"
              />
            </div>
            <div className="mt-12 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Sign up</h1>
              <div className="w-full flex-1 mt-4">
                <div className="mx-auto max-w-xs">
                  <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                    <h3 className="py-1 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
                    <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">

                      <div className="mb-4 md:flex md:justify-around">
                        <div className="mb-4 md:mr-2 md:mb-0">
                          <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                            Email
                          </label>
                          <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="md:ml-2">
                          <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                            UserName
                          </label>
                          <input
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="UserName"
                            type="text"
                            placeholder="UserName"
                          />
                        </div>
                      </div>
                      <div className="mb-4 md:flex md:justify-around">
                        <div className="mb-4 md:mr-2 md:mb-0">
                          <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="password">
                            Password
                          </label>
                          <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                          />
                          <p className="text-xs italic text-red-500">Please choose a password.</p>
                        </div>
                        <div className="md:ml-2">
                          <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="c_password">
                            Confirm Password
                          </label>
                          <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="c_password"
                            type="password"
                            placeholder="******************"
                          />
                        </div>
                      </div>
                      <div className="mb-4 lg:ml-5  md:ml-[90px]">
                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="JobTitle">
                          Job Title
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="JobTitle"
                          type="text"
                          placeholder="Enter your expected Job title"
                        />
                      </div>
                      <div className="mb-4 lg:ml-5 md:ml-[90px]">
                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="JobType">
                          Job Type
                        </label>
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="JobType"
                          type="text"

                        />
                      </div>
                      <div className="mb-4 lg:ml-5 md:ml-[90px]">
                        <label className="block text-sm font-bold text-gray-700 dark:text-white" for="JobType">
                          Work Authorization
                        </label>
                        <label className="mt-5 mb-6 flex content-start">
                          <input type="checkbox" name="H1B" className="mr-2 form-checkbox rounded-none ring-0 focus:border-tan-500 border-tan-300 border-2 w-5 h-5 text-highlight" />
                          <span className="text-sm font-semibold">H1B sponsorship</span>
                        </label>
                      </div>
                      <div className="mb-6 text-center">
                        <button
                          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                          type="button"
                        >
                          Register Account
                        </button>
                      </div>
                      <hr className="mb-6 border-t" />
                      <div className="text-center">
                        <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                          href="./index.html">
                          Already have an account? Login!
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            {/* <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              // style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');"
              style={{ backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')" }}
            ></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
