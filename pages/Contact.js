import Iframe from "react-iframe";

function Contact() {
  return (
    <div
      id="contact"
      className="min-h-full flex flex-col items-center justify-center"
    >
      <div className="mt-10 sm:mt-0">
        <div className="mb-8">
          <h3 className="text-3xl font-bold leading-6 text-[#300E54] ">
            Contact Us
          </h3>
        </div>
      </div>

      <div>
        <div className="mb-2">
          <h1 className="text-xl font-semibold underline">Coordinators:- </h1>
          <p className="font-medium">Aniket Kumar Sinha</p>
          <p className="font-normal">6203961808</p>
          <p className="font-normal">sinhaaniket32@gmail.com</p>
        </div>
        <h1 className="font-medium">Anshika Gupta</h1>
      </div>

      {/* map */}
      {/* <div className=" h-[310px] w-[310px] border-2 border-black">
                <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.3028364855413!2d75.58852469595783!3d28.369019617523016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39131bd8fa3e1421%3A0xd7928a8c86ca1d5e!2zQiBLIEJpcmxhIEluc3RpdHV0ZSBvZiBFbmdpbmVlcmluZyAmIFRlY2hub2xvZ3ksIFBpbGFuaSAo4KSs4KWAIOCkleClhyDgpKzgpL_gpKHgpLzgpLLgpL4g4KSH4KSC4KSc4KWA4KSo4KS_4KSv4KSw4KS_4KSC4KSXIOCklOCksCDgpKrgpY3gpLDgpYzgpKbgpY3gpK_gpYvgpJfgpL_gpJXgpYAg4KS44KSC4KS44KWN4KSl4KS-4KSoLCDgpKrgpL_gpLLgpL7gpKjgpYApIChCS0JJRVQsIFBJTEFOSSk!5e0!3m2!1sen!2sin!4v1632981693884!5m2!1sen!2sin"
                    width="300"
                    height="300"
                    style="border:0;"
                    allowfullscreen=""
                    loading="lazy"
                ></Iframe>
            </div> */}
    </div>
  );
}

export default Contact;
