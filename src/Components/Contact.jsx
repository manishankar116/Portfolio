import React from 'react'

const Contact = () => {
  return (
    <div>
      <section class="bg-white">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl  font-bold text-center text-orange-600">Contact Us</h2>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-orange-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@gmail.com" required />
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-orange-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="I want to know more about you" required />
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-orange-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a message..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center  rounded-lg bg-primary-700 sm:w-fit bg-orange-500 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 ">Send message</button>
      </form>
  </div>
</section>
    </div>
  )
}

export default Contact