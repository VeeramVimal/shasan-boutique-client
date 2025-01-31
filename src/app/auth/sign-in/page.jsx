"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SwitchLink from "@/components/SwitchLink";
import Button from "@/components/button";
import { BUTTONS, STRINGS } from "@/constants/common-strings";
import { ICON_SVG, IMAGE_STRING } from "@/constants/image_string";
import InputField from "@/components/InputField/index";
import { loginDataFields } from "../loginData";
// import CustomInput from "@/components/InputField/customInput";

function SignIn() {
  let router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassIcon, setShowPassIcon] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errorStates, setErrorStates] = useState({
    isValidEmail: false,
    isValidPassword: false,
    incorrectCred: false,
  });

  const handleInputChange = (event, item) => {
    if (item.id === 1) {
      setLoginData({
        ...loginData,
        email: event.target.value,
      });
      setErrorStates({
        ...errorStates,
        isValidEmail:
          event.target.value !== "" ? false : errorStates.isValidEmail,
      });
    } else {
      setLoginData({
        ...loginData,
        password: event.target.value,
      });
      setErrorStates({
        ...errorStates,
        isValidPassword:
          event.target.value !== "" ? false : errorStates.isValidPassword,
      });
    }
  };

  const onLoginPress = (e) => {
    e.preventDefault();
    if (loginData.email === "" && loginData.password === "") {
      setErrorStates({ isValidEmail: true, isValidPassword: true });
      return;
    } else if (loginData.email === "" || !validateEmail(loginData.email)) {
      setErrorStates({ ...errorStates, isValidEmail: true });
      return;
    } else if (loginData.password === "" || loginData.password.length < 8) {
      setErrorStates({ ...errorStates, isValidPassword: true });
      return;
    } else {
      setLoading(true);
      setTimeout(() => {
        const data = { email: loginData.email, password: loginData.password };
        // dispatch(loginUser(data, errorStates, setErrorStates, navigate));
        setLoading(false);
      }, 3000);
    }
  };
  const showErrorMessage = (item) => {
    if (item.id === 1 && errorStates.isValidEmail) {
      return item.errorMessage;
    } else if (item.id === 2 && errorStates.isValidPassword) {
      return item.errorMessage;
    }
  };
  return (
    <>
      <div className="font-[sans-serif]">
        <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
          <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
            <div>
              {/* <SwitchLink tabId={1}/> */}
              <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
                <form className="space-y-4" autoComplete="off">
                  <div className="mb-8">
                    <h3 className="text-gray-800 text-3xl font-extrabold">
                      {STRINGS.SIGN_IN}
                    </h3>
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                      {STRINGS.LOG_IN_PARA}
                    </p>
                  </div>

                  {/* <div>
                    <label className="text-gray-800 text-sm mb-2 block">
                      Email
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="email"
                        type="text"
                        // required
                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                        placeholder="Enter email"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        stroke="#bbb"
                        className="w-[18px] h-[18px] absolute right-4"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="10"
                          cy="7"
                          r="6"
                          data-original="#000000"
                        ></circle>
                        <path
                          d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-800 text-sm mb-2 block">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        name="password"
                        type="password"
                        // required
                        className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg outline-blue-600"
                        placeholder="Enter password"
                      />
                      {ICON_SVG.EYE_OPEN}
                    </div>
                  </div> */}
                  {loginDataFields.map((item) => {
                    return (
                      <div className="relative lg:mt-1 sm:mt-1 lg:mb-9 sm:mb-9 mt-10">
                        <InputField
                          key={item.id}
                          type={item.type}
                          name={item.name}
                          maxLength={item.maxLength}
                          padReqd={item.type === "password" ? true : false}
                          label={item.label}
                          showPassIcon={showPassIcon}
                          // inputStyle={
                          //   "block w-full  text-base font-semibold text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 focus:font-semibold peer"
                          // }
                          // labelStyle={
                          //   "top-1 left-2 absolute text-base font-semibold duration-300 transform -translate-y-4 scale-75  z-10 origin-[0] bg-white   peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 "
                          // }
                          labelStyle="absolute cursor-text left-0 -top-3 text-sm text-textcolor bg-white-500 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                          placeholder={item.placeholder}
                          inputBoxStyle={"w-full peer bg-transparent h-10 w-72 rounded-lg text-textcolor placeholder-transparent ring-2 px-2 ring-bordercolor focus:ring-sky-600 focus:outline-none focus:border-rose-600"}
                          value={
                            item.id === 1 ? loginData.email : loginData.password
                          }
                          // mailIcon={true}
                          // RightIcon={true}
                          onChange={(event) => {
                            handleInputChange(event, item);
                            item.type === "password" &&
                              event.target.value.length > 0 &&
                              setShowPassIcon(true);
                            item.type === "password" &&
                              event.target.value.length === 0 &&
                              setShowPassIcon(false);
                          }}
                          errorMessage={showErrorMessage(item)}
                        />
                      </div>
                    );
                  })}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        for="remember-me"
                        className="ml-3 block text-sm text-gray-800"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      {/* <a
                      href="jajvascript:void(0);"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Forgot your password?
                    </a> */}
                      <a
                        href="javascript:void(0);"
                        className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                        onClick={() => router.push("/auth/forgot-password")}
                      >
                        {ICON_SVG.FORGOT_ICON}
                        <span className="inline-block ml-1">
                          Forgot Password
                        </span>
                      </a>
                    </div>
                  </div>

                  <div className="!mt-8">
                    <Button
                      loading={loading}
                      buttonClass={"mx-0"}
                      buttonStyle={
                        // "w-full h-10 items-center justify-center font-semibold font-sm rounded-md bg-primary  text-white-300"
                        "w-full h-10 items-center justify-center font-semibold font-sm rounded-md bg-primary hover:bg-blue-700 text-white-300 focus:shadow-outline focus:outline-none transition-all duration-300 ease-in-out"
                      }
                      // IconComponent={ICON_SVG.LOGIN_ARROW}
                      iconSideType="right"
                      iconVal={ICON_SVG.LOGIN_ARROW}
                      buttonText={BUTTONS.SIGN_IN}
                      iconStyle={"inline-block mr-2"}
                      onClick={(e) => onLoginPress(e)}
                    />
                  </div>

                  {/* <p className="text-sm !mt-8 text-center text-gray-800">
                  Don't have an account{" "}
                  <a
                  href=""
                    className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                    onClick={() => router.push('/auth/sign-up')}
                  >
                    Register here
                  </a>
                </p> */}
                  <p className="text-sm !mt-8 text-center text-gray-800">
                    Don't have an account
                    <a
                      href="javascript:void(0);"
                      className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
                      onClick={() => router.push("/auth/sign-up")}
                    >
                      Register here
                    </a>
                  </p>
                </form>
              </div>
            </div>

            <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
              <img
                src="https://readymadeui.com/login-image.webp"
                className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
                alt="Dining Experience"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignIn;
