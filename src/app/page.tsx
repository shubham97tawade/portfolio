"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_USER_ID } from "./lib/emailClient";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, []);

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1NJPO2RPqYgOh9VfaGSLZkKRS4dGTjkJR/view', '_blank');
  };

  const navigateToBlogs = () => {
    router.push('/blogs');
  }

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/shubham-tawade-985340121/', '_blank');
  };

  const openGitHub = () => {
    window.open('https://github.com/shubham05tawade', '_blank');
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!email || !message) {
      alert("Please fill in both email and message fields.");
      return;
    }
    emailjs.sendForm(EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, e.currentTarget, EMAIL_JS_USER_ID)
      .then(() => {
          if (formRef.current) {
            formRef.current.reset();
          }
          alert("Message sent successfully!");
      }, () => {
          alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <main className="w-full min-h-dvh grid grid-cols-1 grid-rows-4 place-items-center">
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
          initial={{ opacity: 0, x: -5 }}
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
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: 'easeInOut' }} 
          className="w-full h-full flex items-center justify-center bg-white text-black hover:cursor-pointer order-1">
          <p className="md:text-lg text-base flex flex-col items-center justify-center" onClick={openResume}><img src="https://cdn-icons-png.flaticon.com/512/3135/3135731.png" className="w-8 h-8"/>Resume</p>
        </motion.section>
        <motion.section 
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.7, ease: 'easeInOut' }}
          className="w-full h-full flex items-center justify-center bg-black text-white hover:cursor-pointer order-2">
          <p className="md:text-lg text-base flex flex-col items-center justify-center" onClick={navigateToBlogs}><img src="https://cdn-icons-png.flaticon.com/512/4659/4659050.png" className="w-8 h-8"/>Blog</p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.9, ease: 'easeInOut' }}
          className="w-full h-full flex items-center justify-center bg-black text-white hover:cursor-pointer md:order-3 order-4">
          <p className="md:text-lg text-base flex flex-col items-center justify-center" onClick={openLinkedIn}><img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" className="w-8 h-8"/>LinkedIn</p>
        </motion.section>
        <motion.section
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.1, ease: 'easeInOut' }}
          className="w-full h-full flex items-center justify-center bg-white text-black hover:cursor-pointer md:order-4 order-3">
          <p className="md:text-lg text-base flex flex-col items-center justify-center" onClick={openGitHub}><img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" className="w-8 h-8"/>Github</p>
        </motion.section>
      </div>
      <div className="w-full h-dvh flex flex-col p-8 md:p-24 items-center justify-left">
        <form className="w-full flex flex-col items-start justify-left" ref={formRef} onSubmit={sendEmail}>
          <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="text-2xl font-medium md:text-5xl mt-2 pb-12 w-full text-center"
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
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
              id="email"
              autoComplete="email"
              autoFocus
              onFocus={() => setEmail('')}
              onBlur={() => setEmail(email.trim())}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email address"
              maxLength={100}
              minLength={5}
              className="w-full p-3 mb-4 border border-foreground-300 rounded-sm focus:outline-none text-base bg-transparent"
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
              className="w-full p-3 mb-4 border border-foreground-300 rounded-sm focus:outline-none focus:ring-foreground-500 text-base bg-transparent"
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              id="message"
              required
              onFocus={() => setMessage('')}
              onBlur={() => setMessage(message.trim())}
              maxLength={500}
              minLength={5}
              title="Message must be between 5 and 500 characters"
              autoComplete="off"
              autoFocus
              style={{ resize: 'none' }}  
            ></textarea>
          </motion.section>
          <motion.button 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0}}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            viewport={{ once: true }}
            type="submit"
            className="w-auto px-4 py-3 md:px-6 md:py-4 bg-foreground text-background rounded-sm mt-2 hover:bg-foreground transition-colors text-base">
            Send Message
          </motion.button>
        </form>
      </div>
    </main>
  );
}
