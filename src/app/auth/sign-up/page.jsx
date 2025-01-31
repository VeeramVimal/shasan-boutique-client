"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SwitchLink from "@/components/SwitchLink";
import Config from "@/utils/config";
import CountryList from "@/data/CountryCodes.json";
import CustomInput from "@/components/InputField/customInput";
import CustomSelect from "@/components/InputField/customSelect";
import { registerFields } from "../loginData";
import {
  BUTTONS,
  STRINGS,
  MAINTENANCE_MESSAGE,
} from "@/constants/common-strings";
import { removeWhiteSpace } from "@/utils/common";
import Link from "next/link";
import { ICON_SVG, IMAGE_STRING } from "@/constants/image_string";
import Button from "@/components/button";

function SignUp() {
  let router = useRouter();
  let maintenance = MAINTENANCE_MESSAGE;
  const [loading, setLoading] = useState(false);
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    mobileNo: "",
    referralId: "",
    terms: false,
  });
  const [initialVal, setInitialVal] = useState({
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
    country: false,
    mobileNo: false,
    referralId: false,
    terms: false,
  });
  const onSignupPress = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        className="min-h-screen bg-gray-100 text-gray-900 flex justify-center"
        // className="min-h-screen bg-gray-100 text-textcolor flex justify-center items-center"
      >
        <div
          className="max-w-screen-xl m-0 sm:m-10 bg-white-500 shadow-md sm:rounded-lg flex justify-center flex-1"
          // className="w-full mx-4 sm:mx-auto bg-white-500 shadow-md sm:rounded-lg flex flex-col lg:flex-row"
        >
          {/* <SwitchLink tabId={1}/> */}
          {/* Left Content */}
          {/* maintenance */}
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="text-center">
              <img
                src={IMAGE_STRING.LOGO_1}
                alt="Logo"
                className="w-32 mx-auto"
              />
              {/* <img
                className="md:absolute lg:absolute xl:absolute top-6 left-6 p-6 md:p-0 lg:p-0 xl:p-0"
                src={IMAGE_STRING.LOGO_1}
                alt="Terolo logo"
              /> */}
            </div>
            {Config.MAINTENANCE_STATUS !== "Disable" ? (
              <div className="mt-8">
                <h1 className="text-3xl md:text-4xl font-bold text-textcolor">
                  {maintenance.UNDER_MAINTENANCE_TXT}
                </h1>
                <p className="mt-4 text-lg text-textcolor">
                  {maintenance.MAINTENANCE_TXT}
                </p>
                <button
                  // className="mt-6 px-4 py-2 text-white-300 bg-blue-600 hover:bg-blue-700 rounded-lg"
                  className="mt-6 px-4 py-2 text-white-300 bg-indigo-500 hover:bg-indigo-700 rounded-lg"
                  // className="mt-5 tracking-wide font-semibold bg-indigo-500 text-white-300  py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={() => alert("Thank you for your patience!")}
                >
                  {BUTTONS.NOTIFY_ME}
                </button>
              </div>
            ) : (
              <div className="mt-8">
                <h1 className="text-2xl xl:text-3xl font-bold text-center text-primary">
                  {STRINGS.SIGN_UP}
                </h1>
                <form className="mt-6 space-y-4" autoComplete="off">
                  {/* Email and Username */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <CustomInput
                        isInputStringOnly
                        isMandatory
                        className="w-full peer bg-transparent h-10 w-72 rounded-lg text-textcolor placeholder-transparent ring-2 px-2 ring-bordercolor focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        // className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder="Enter Name"
                        type={"text"}
                        name={"fullName"}
                        label={"Full Name"}
                        labelStyle="absolute cursor-text left-0 -top-3 text-sm text-textcolor bg-white-500 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                        inputType={2}
                        value={signupData.fullName}
                        setValue={setSignupData}
                        initialVal={initialVal}
                        setInitialVal={setInitialVal}
                      />
                    </div>

                    <div className="flex-1">
                      <CustomSelect
                        isMandatory
                        label={"Country"}
                        // initalStyle={
                        //   "block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                        // }
                        // initalStyle={"mt-1 block w-full px-3 py-2 text-sm border rounded-lg focus:ring focus:ring-blue-300"}
                        initalStyle={
                          "w-full peer bg-transparent h-10 w-72 rounded-lg text-textcolor placeholder-transparent ring-2 px-2 ring-bordercolor focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        }
                        data={CountryList}
                        name={"country"}
                        value={signupData.country}
                        inputType={3}
                        setValue={setSignupData}
                        placeholder="Choose your country"
                        initialVal={initialVal}
                        setInitialVal={setInitialVal}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <CustomInput
                        isInputNumberOnly
                        isMandatory
                        className="w-full peer bg-transparent h-10 w-72 rounded-lg text-textcolor placeholder-transparent ring-2 px-2 ring-bordercolor focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        // className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder="Enter your mobile number"
                        type={"text"}
                        name={"mobileNo"}
                        label={"Phone"}
                        labelStyle="absolute cursor-text left-0 -top-3 text-sm text-textcolor bg-white-500 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                        inputType={2}
                        value={signupData.mobileNo}
                        setValue={setSignupData}
                        initialVal={initialVal}
                        setInitialVal={setInitialVal}
                      />
                    </div>
                    <div className="flex-1">
                      <CustomInput
                        isInputAll
                        isMandatory
                        className="w-full peer bg-transparent h-10 w-72 rounded-lg text-textcolor placeholder-transparent ring-2 px-2 ring-bordercolor focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        // className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder="Enter your email address"
                        type={"text"}
                        name={"email"}
                        label={"Email"}
                        labelStyle="absolute cursor-text left-0 -top-3 text-sm text-textcolor bg-white-500 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                        inputType={2}
                        value={signupData.email}
                        setValue={setSignupData}
                        initialVal={initialVal}
                        setInitialVal={setInitialVal}
                        onKeyDown={removeWhiteSpace}
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <CustomInput
                        isInputStringOnly
                        isMandatory
                        className="w-full peer bg-transparent h-10 w-72 rounded-lg text-textcolor placeholder-transparent ring-2 px-2 ring-bordercolor focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        // className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder="Enter your password"
                        type={"password"}
                        name={"password"}
                        label={"Password"}
                        labelStyle="absolute cursor-text left-0 -top-3 text-sm text-textcolor bg-white-500 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                        inputType={2}
                        value={signupData.password}
                        setValue={setSignupData}
                        initialVal={initialVal}
                        setInitialVal={setInitialVal}
                        autoComplete="off"
                        onKeyDown={removeWhiteSpace}
                      />
                    </div>
                    <div className="flex-1">
                      <CustomInput
                        isInputStringOnly
                        isMandatory
                        className="w-full peer bg-transparent h-10 w-72 rounded-lg text-textcolor placeholder-transparent ring-2 px-2 ring-bordercolor focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        // className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder="Confirm your password"
                        type={"password"}
                        name={"confirmPassword"}
                        label={"Confirm Password"}
                        labelStyle="absolute cursor-text left-0 -top-3 text-sm text-textcolor bg-white-500 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                        inputType={2}
                        value={signupData.confirmPassword}
                        setValue={setSignupData}
                        initialVal={initialVal}
                        setInitialVal={setInitialVal}
                        autoComplete="off"
                        onKeyDown={removeWhiteSpace}
                      />
                    </div>
                  </div>
                  <div className="sm:flex-row gap-4">
                    <div className="flex-1">
                      <CustomInput
                        isInputStringOnly
                        isOptional
                        className="w-full peer bg-transparent h-10 w-72 rounded-lg text-textcolor placeholder-transparent ring-2 px-2 ring-bordercolor focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                        // className="block py-2.5 px-0 w-full text-sm text-textcolor bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                        placeholder="Enter Referral Id (Optional)"
                        type={"text"}
                        name={"referralId"}
                        label={"Referral Id"}
                        labelStyle="absolute cursor-text left-0 -top-3 text-sm text-textcolor bg-white-500 mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                        inputType={2}
                        value={signupData.referralId}
                        setValue={setSignupData}
                        initialVal={initialVal}
                        setInitialVal={setInitialVal}
                        onKeyDown={removeWhiteSpace}
                        autoComplete="off"
                      />
                    </div>
                  </div>

                  {/* Work Authorization */}
                  <div className="">
                    <div className="flex items-center">
                      <input
                        id="checkTerms"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        name="checkTerms"
                        checked={signupData.terms}
                        onChange={(e) => {
                          setSignupData({
                            ...signupData,
                            terms: e.target.checked,
                          });
                        }}
                      />

                      <Link href="/terms-of-use" target="_blank">
                        <label
                          htmlFor="checkTerms"
                          className={`text-textcolor mx-2 mb-0 ${
                            !initialVal.terms && "text-textcolor"
                          } cursor-pointer`}
                        >
                          I accept the{" "}
                          <span
                            className={`border-b border-gray-500 font-semibold border-dotted text-primary fw-bold `}
                          >
                            Terms of use
                          </span>
                        </label>
                      </Link>
                    </div>
                  </div>

                  {/* Submit Button */}                
                  <div className="!mt-8">
                    <Button
                      loading={loading}
                      buttonClass={"mx-0"}
                      buttonStyle={
                        "w-full py-4 rounded-lg tracking-wide font-semibold items-center justify-center font-semibold font-sm rounded-md bg-primary hover:bg-blue-700 text-white-300 focus:shadow-outline focus:outline-none transition-all duration-300 ease-in-out"
                      }
                      LeftIcon={ICON_SVG.SIGN_UP_ICON}
                      buttonText={BUTTONS.SIGN_UP}
                      iconStyle={"ml-3"}
                      onClick={onSignupPress}
                    />
                  </div>
                </form>
                <hr className="my-6" />

                <div className="items-center justify-center flex">
                  <text className="text-sm text-textcolor font-semibold leading-normal mt-2 mb-7">
                    Already have an account?{" "}
                    <button
                      className="cursor-pointer text-sm border-b border-gray-500 font-semibold border-dotted text-textcolor transition-colors hover:text-primary"
                      type="button"
                      onClick={() => router.push("/auth/sign-in")}
                    >
                      {"Sign in"}
                    </button>
                  </text>
                </div>
              </div>
            )}
          </div>

          {/* Right Image Section */}
          <div className="hidden lg:flex flex-1 bg-indigo-100 text-center">
            <div
              // className="w-3/4 h-3/4 bg-center bg-contain bg-no-repeat"
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
