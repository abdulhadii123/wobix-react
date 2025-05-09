/** @format */

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


function ContactUsSection() {
  const ContactUs = [
    {
      image: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z"
            fill="#252525"
          />
        </svg>
      ),
      Location: "123 Design Street, Creative City, 12345 ",
    },
    {
      image: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196667 15.0217 0.000666667 14.5507 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196666 1.45067 0.000666667 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.805 0.98 20.0007 1.45067 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.0217 15.805 18.5507 16.0007 18 16H2ZM10 9L18 4V2L10 7L2 2V4L10 9Z"
            fill="#252525"
          />
        </svg>
      ),
      email: "contact@waterbottle.com",
    },
    {
      image: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z"
            fill="#252525"
          />
        </svg>
      ),
      phone: "+1 (555) 123-4567",
    },
  ];

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

    <div className="bg-[whitesmoke] pb-[80px] pt-[70px]">
      <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-gray-500 text-lg mb-[80px]">Contact Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-[40px]">
            Let's be in Touch
          </h2>
          <p className="text-xl text-gray-700 mb-[20px]">Contact Information</p>
          <div className="space-y-4">
            {ContactUs.map((contact, index) => (
              <div key={index} className="flex items-center gap-3">
                <span>{contact.image}</span>
                <span>
                  {contact.Location || contact.email || contact.phone}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="right flex flex-col ">
          <p className="text-[#000000B2] mb-[40px]">
            Have questions about our products? We'd love to hear from you. Send
            us a message and we'll respond as soon as possible.
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
                  className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 cursor-pointer"
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

export default ContactUsSection;
