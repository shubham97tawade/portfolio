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
    <div></div>
  );
}
