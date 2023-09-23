import React from "react";

const ComplaintPage = () => {
  return (
    <section className="w-full bg-white shadow-md rounded-md   border">
      <div className="w-full py-8 lg:py-16 px-4">
        <form action="#" className="w-full space-y-8">
          <div className="w-full flex items-center gap-4">
            <div className="w-1/2">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Lawyer Email / BAR Number
              </label>
              <input
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                for=""
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Recipt if any
              </label>
              <input
                type="file"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              />
            </div>
          </div>
          <div>
            <label
              for="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="flex">
            <button
              type="submit"
              className="text-white bg-black px-4 py-2 rounded-md ml-auto"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ComplaintPage;
