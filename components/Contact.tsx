import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            I'm currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto">
          {/* 
            The form is now connected to your Formspree endpoint.
            Messages will be forwarded to your email.
          */}
          <form 
            action="https://formspree.io/f/xqayvrgr" 
            method="POST" 
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-calm-blue-500 focus:border-calm-blue-500" />
            </div>
             <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-calm-blue-500 focus:border-calm-blue-500" />
            </div>
             <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
              <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-4 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-calm-blue-500 focus:border-calm-blue-500"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full bg-calm-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-calm-blue-700 transition-colors duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 text-center text-slate-600">
            <p>You can also reach me at:</p>
            <a href="mailto:sohamburhan@gmail.com" className="font-medium text-calm-blue-600 hover:text-calm-blue-800">sohamburhan@gmail.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;