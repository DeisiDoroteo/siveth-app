
import Label from "../ui/label";
import Input from "../ui/input.jsx";

      
  
    export default function Code() {
    
      
        
       
            return (
                <div className="bg-white shadow-lg rounded-md p-5 md:p-10 flex-col w-11/12 mt-10 mb-10 sm:mx-auto max-w-80rem">
                  <div className="flex flex-wrap">
                    <div className="md:w-1/2 mt-2">
                      {/* Your image goes here */}
                    </div>
                    <div className="md:w-1/2 mt-2">
                      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight pb-2.5 text-gray-900">
                        Email Verification
                      </h2>
              
                      <div className="flex flex-col space-y-16">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                          <div className="font-semibold text-3xl">
                            <p>We have sent a code to your email</p>
                            {/* {email} */}
                          </div>
                        </div>
              
                        <form>
                          <div className="flex flex-col space-y-16">
                            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                              {/* Your OTP input fields go here */}
                            </div>
              
                            <div className="flex flex-col space-y-5">
                              <div>
                                <button
                                //   onClick={verifyOTP}
                                  className="flex flex-row cursor-pointer items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                                >
                                  Verify Account
                                </button>
                              </div>
              
                              <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                <p>Didn't receive code?</p>{" "}
                                <button
                                //   className={`flex flex-row items-center ${disable ? "text-gray-500 cursor-not-allowed" : "text-blue-500 underline cursor-pointer"}`}
                                //   onClick={resendOTP}
                                //   disabled={disable}
                                >
                                  {/* {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"} */}
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              );
    
            
    };              