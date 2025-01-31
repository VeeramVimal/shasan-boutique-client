"use client";
import Button from "@/components/button";
import CustomInput from "@/components/InputField/customInput";
import { BUTTONS, STRINGS } from "@/constants/common-strings";
import { IMAGE_STRING } from "@/constants/image_string";
import { removeWhiteSpace } from "@/utils/common";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ResetPassword() {
  let router = useRouter();
  const [reset, setReset] = useState({
    password: "",
    retypePassword: "",
  });
  const [initialVal, setInitialVal] = useState({
    password: "",
    retypePassword: "",
  });
  return (
    <>
      <div className="!font-Jakarta">
        <img
          className="md:absolute lg:absolute xl:absolute top-6 left-6 p-6 md:p-0 lg:p-0 xl:p-0"
          src={IMAGE_STRING.LOGO_1}
          alt="Terolo logo"
        />
        <div className="md:absolute lg:absolute xl:absolute inset-0 items-center justify-center flex flex-col">
          <div className="w-full md:w-96 lg:w-96 xl:w-96 items-center justify-center flex flex-col px-8 rounded-xl  shadow-none md:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] lg:shadow-[0px_0px_10px__rgba(94,108,132,0.1)] xl:shadow-[0px_0px_10px__rgba(94,108,132,0.1)]  relative">
            <div className="w-full text-center md:text-center lg:text-center xl:text-left mb-1 mt-0 md:mt-6 md:mb-1 lg:mt-6 lg:mb-1 xl:mt-6 xl:mb-1">
              <text className="text-xl font-semibold text-center text-primary">
                {STRINGS.RESET_YOUR_PASSWORD}
              </text>
            </div>
            <div className="text-center md:text-center lg:text-center xl:text-left text-textcolor font-semibold text-normal w-full ">
              {STRINGS.ENTER_NEW_PASSWORD}
            </div>

            <div className="w-full flex-grow">
              <form>
                <div className="relative my-10">
                  <CustomInput
                    isInputStringOnly
                    isMandatory
                    className="w-full peer bg-transparent h-10 w-72 rounded-lg text-textcolor placeholder-transparent ring-2 px-2 ring-bordercolor focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="Enter your password"
                    type={"password"}
                    name={"password"}
                    label={"Password"}
                    labelStyle="absolute cursor-text left-0 -top-3 text-sm text-textcolor bg-white-500 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                    inputType={2}
                    value={reset.password}
                    setValue={setReset}
                    initialVal={initialVal}
                    setInitialVal={setInitialVal}
                    autoComplete="off"
                    onKeyDown={removeWhiteSpace}
                  />
                </div>

                <div className="relative">
                
                   <CustomInput
                    isInputStringOnly
                    isMandatory
                    className="w-full peer bg-transparent h-10 w-72 rounded-lg text-textcolor placeholder-transparent ring-2 px-2 ring-bordercolor focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder="Enter your password"
                    type={"password"}
                    name={"password"}
                    label={"Retype password"}
                    labelStyle="absolute cursor-text left-0 -top-3 text-sm text-textcolor bg-white-500 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                    inputType={2}
                    value={reset.retypePassword}
                    setValue={setReset}
                    initialVal={initialVal}
                    setInitialVal={setInitialVal}
                    autoComplete="off"
                    onKeyDown={removeWhiteSpace}
                  />
                </div>

                <Button
                  buttonClass={"mx-0 mt-10"}
                  // loading={loading}
                  buttonStyle={
                    "w-full h-10 items-center justify-center font-semibold font-sm rounded-md bg-primary hover:bg-blue-700 text-white-300 focus:shadow-outline focus:outline-none transition-all duration-300 ease-in-out"
                    // "w-full h-10 items-center justify-center font-semibold font-sm rounded-md bg-primary text-white-300"
                  }
                  buttonText={BUTTONS.CONFIRM}
                />
                {/* {errorStates.incorrectCred && (
                                <div className="items-center mb-3 justify-center flex z-10">
                                    <p className="text-red-500 font-semibold leading-normal">
                                        User with this Email ID does not exist
                                    </p>
                                </div>
                            )} */}
                <div className="items-center justify-center flex z-10">
                  <text className="text-sm text-textcolor font-semibold leading-normal mt-6 mb-7">
                    Remember password?{" "}
                    <span
                      className="cursor-pointer text-sm font-semibold text-primary transition-colors underline hover:text-primary"
                      onClick={() => router.push("/auth/sign-in")}
                    >
                      {"Sign in"}
                    </span>
                  </text>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ResetPassword;
