import Iframe from 'react-iframe';

function Contact() {
    return (
        <div id="contact" className="min-h-screen flex items-center justify-center">
            <div className="mt-10 sm:mt-0">
                <div className="mb-8">
                    <h3 className="text-3xl font-medium leading-6 text-[#300E54] underline">Contact Us</h3>
                </div>

                <div className="md:grid md:grid-cols-3 md:gap-6">        
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        name="email-address"
                                        id="email-address"
                                        autoComplete="email"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    </div>

                                    <div className="col-span-6">
                                    <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                        University ID
                                    </label>
                                    <input
                                        type="text"
                                        name="university-id"
                                        id="university-id"
                                        autoComplete="university-id"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    </div>

                                </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Submit
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            {/* map */}
            <div className="h-[310px] border-2 border-black">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2337.3028364855413!2d75.58852469595783!3d28.369019617523016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39131bd8fa3e1421%3A0xd7928a8c86ca1d5e!2zQiBLIEJpcmxhIEluc3RpdHV0ZSBvZiBFbmdpbmVlcmluZyAmIFRlY2hub2xvZ3ksIFBpbGFuaSAo4KSs4KWAIOCkleClhyDgpKzgpL_gpKHgpLzgpLLgpL4g4KSH4KSC4KSc4KWA4KSo4KS_4KSv4KSw4KS_4KSC4KSXIOCklOCksCDgpKrgpY3gpLDgpYzgpKbgpY3gpK_gpYvgpJfgpL_gpJXgpYAg4KS44KSC4KS44KWN4KSl4KS-4KSoLCDgpKrgpL_gpLLgpL7gpKjgpYApIChCS0JJRVQsIFBJTEFOSSk!5e0!3m2!1sen!2sin!4v1632981693884!5m2!1sen!2sin" width="450" height="305" style="border:0;" allowfullscreen="" loading="lazy"></Iframe>
            </div>
        </div>
    )
}

export default Contact;
