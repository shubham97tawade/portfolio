"use client";

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="w-full min-h-dvh grid grid-cols-1 grid-rows-4 place-items-center overflow-hidden">
      <div className="w-full h-dvh flex flex-col items-center justify-center">
        <section className="flex flex-col items-start justify-center">
          <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          viewport={{ once: true }}
          className="text-4xl font-medium md:text-7xl"
          >
              Shubham Tawade
          </motion.h1>
          <motion.h5
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="text-base md:ml-1 mb-12"
          >
              Developer.
          </motion.h5>
          <motion.p
            initial={{ opacity: 0, y: 20}}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="text-base md:ml-1"
          >
              Welcome to my digital space. 🚀
          </motion.p>
        </section>
      </div>
      <div className='w-full h-dvh flex flex-col items-center justify-center'>
        <section className='w-3/4 flex flex-col items-start justify-center'>
          <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="text-2xl font-medium md:text-5xl pb-12"
          viewport={{ once: true }}
          >
              About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeInOut' }}
            className="text-base mb-8"
            viewport={{ once: true }}
          >
              {"Hey there, I'm Shubham, a software engineer 👨‍💻 with 5+ years of professional experience in building modern web applications 🌐 using the latest frontend, backend, and cloud technologies 🛠️."}
          </motion.p>
          <motion.p
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeInOut' }}
            className="text-base mb-8"
            viewport={{ once: true }}
          >
              {"I enjoy solving real-world problems with clean code 📝, intuitive design, and scalable architecture 🏗️. Whether I’m working on a UI, spinning up micro services, or deploying to the cloud, I like to keep things efficient, elegant, and bug-free ✅."}
          </motion.p>
          <motion.p
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1, ease: 'easeInOut' }}
            className="text-base mb-8"
            viewport={{ once: true }}
          >
              {"What drives me? A love for learning 📖, a knack for collaboration 🤝, and the occasional rush of fixing something five minutes ⏰ before a demo. Tech is always evolving, and so am I. Let’s connect, collaborate, and maybe even push a few boundaries 🧱 together."}
          </motion.p>
        </section>
      </div>
      <div className="w-full h-dvh grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2">
        <motion.section
          initial={{ opacity: 0, x: -50}}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.3, ease: 'easeInOut' }} 
          className="w-full h-full flex items-center justify-center bg-white text-black hover:cursor-pointer order-1">
          <p className="text-xl flex flex-col items-center justify-center"><img src="https://cdn-icons-png.flaticon.com/512/3135/3135731.png" className="w-8 h-8"/>Resume</p>
        </motion.section>
        <motion.section 
          initial={{ opacity: 0, x: 50}}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.3, ease: 'easeInOut' }}
          className="w-full h-full flex items-center justify-center bg-black text-white hover:cursor-pointer order-2">
          <p className="text-xl flex flex-col items-center justify-center"><img src="https://cdn-icons-png.flaticon.com/512/4659/4659050.png" className="w-8 h-8"/>Blog</p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, x: -50}}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.3, ease: 'easeInOut' }}
          className="w-full h-full flex items-center justify-center bg-black text-white hover:cursor-pointer md:order-3 order-4">
          <p className="text-xl flex flex-col items-center justify-center"><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" className="w-8 h-8"/>LinkedIn</p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, x: 50}}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.3, ease: 'easeInOut' }}
          className="w-full h-full flex items-center justify-center bg-white text-black hover:cursor-pointer md:order-4 order-3">
          <p className="text-xl flex flex-col items-center justify-center"><img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" className="w-8 h-8"/>Github</p>
        </motion.section>
      </div>
      <div className="w-full h-dvh p-12 md:p-48 flex items-center justify-center">
        <div className="w-full flex flex-col items-start justify-left">
          <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="text-2xl font-medium md:text-5xl pb-12 w-full text-center"
          viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <motion.section
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeInOut' }}
            className="w-full"
          >
            <label htmlFor="email" className="mb-1 text-base">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base text-black"
            />
          </motion.section>
          <motion.section
            initial={{ opacity: 0,}}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'easeInOut' }}
            className="w-full"
          >
            <label htmlFor="message" className="mb-1 text-base">Message:</label>
            <textarea
              placeholder="Your message"
              className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-base text-black"
              rows={10}
            ></textarea>
          </motion.section>
          <motion.button 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0}}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="w-auto px-8 py-4 bg-blue-500 text-white rounded-md mt-2 hover:bg-blue-600 transition-colors">
            Send Message
          </motion.button>
        </div>
      </div>
    </main>

  );
}
