/** @format */

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });
  return (
    <div className="bg-[whitesmoke]">
      <div className="wrapper flex justify-between pt-[20px]">
        <div className="left w-[49%]">
          <div className="image relative">
            <img
              className="rounded-2xl h-[700px]"
              src="/images/contactimage.jpeg"
              alt="contact-us"
            />
            <div className="socialmedia flex justify-between items-center">
              <div className="socialmedia-icon flex justify-between absolute right-[20px] bottom-[20px] gap-[8px]">
                <img src="/images/Instagram.png" alt="" />
                <a
                  href="https://www.instagram.com/yourinstagrampage"
                  target="_blank"
                ></a>
                <img src="/images/Twitter.png" alt="" />
                <a
                  href="https://www.twitter.com/yourtwitterpage"
                  target="_blank"
                ></a>
                <img src="/images/Facebook.png" alt="" />
                <a
                  href="https://www.facebook.com/yourfacebookpage"
                  target="_blank"
                ></a>
                <img src="/images/Youtube.png" alt="" />
                <a
                  href="https://www.twitter.com/yourtwitterpage"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div className="right flex flex-col w-[49%]">
          <h1 className="text-[112px] font-bold text-center">Contact</h1>
          <p className="text-[#000000B2] mb-[40px] text-[24px]">
            Have questions about our bottles? Contact us—we’re here to help you
            stay refreshed!
          </p>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Form Submitted:", values);
              resetForm();
            }}
          >
            {() => (
              <Form className="space-y-4">
                <p className="mb-[2px]">Name</p>
                <Field
                  name="name"
                  className="w-full p-2 border rounded-lg  border-[#CACACA]"
                  placeholder="Your name"
                />

                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <p className="mb-[2px]">Email</p>
                <Field
                  name="email"
                  type="email"
                  className="w-full p-2 border rounded-lg  border-[#CACACA]"
                  placeholder="Your email"
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <p className="mb-[2px]">Message</p>
                <Field
                  name="message"
                  as="textarea"
                  className="w-full p-2 border rounded-lg mb-[40px]  border-[#CACACA]"
                  placeholder="Your message"
                  rows="4"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800"
                >
                  Send
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contact;
