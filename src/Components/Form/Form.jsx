import { useForm } from "react-hook-form";
import Swal from "sweetalert";
import { useState } from "react";
import { sendMessage } from "../../Config/Api";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] =
    useState(false);

  const onSubmit = async (formData) => {
    setIsLoading(true);

    try {
      const response = await sendMessage(
        formData
      );

      setIsLoading(false);

      if (response.ok) {
        Swal({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success",
          button: "OK",
        });
        reset();
      } else {
        handleErrorResponse(response);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
      showError(
        "Something went wrong. Please try again."
      );
    }
  };

  const handleErrorResponse = (response) => {
    if (response.status === 400) {
      showError(
        "Invalid input. Please check your data."
      );
    } else {
      showError(
        "Error sending message. Please try again."
      );
    }
  };

  const showError = (message) => {
    Swal({
      title: "Error!",
      text: message,
      icon: "error",
      button: "Retry",
    });
  };

  return (
    <div className="contact_form_box">
      <form
        id="dreamit-form"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form_box">
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message:
                      "Name must be at least 3 characters",
                  },
                })}
                placeholder="Your Name *"
              />
              {errors.name && (
                <span className="error-message">
                  {errors.name.message}
                </span>
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form_box">
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message:
                      "Invalid email address",
                  },
                })}
                placeholder="Your Email *"
              />
              {errors.email && (
                <span className="error-message">
                  {errors.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form_box">
              <input
                type="text"
                {...register("subject", {
                  required: "Subject is required",
                  minLength: {
                    value: 5,
                    message:
                      "Subject must be at least 5 characters",
                  },
                })}
                placeholder="Your Subject *"
              />
              {errors.subject && (
                <span className="error-message">
                  {errors.subject.message}
                </span>
              )}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form_box">
              <input
                type="tel"
                {...register("phone", {
                  required:
                    "Phone number is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message:
                      "Phone number must be 11 digits",
                  },
                })}
                placeholder="Your Phone *"
              />
              {errors.phone && (
                <span className="error-message">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form_box">
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message:
                      "Message must be at least 10 characters",
                  },
                })}
                cols="30"
                rows="10"
                placeholder="Message"
              />
              {errors.message && (
                <span className="error-message">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="quote_button">
              <button
                className="btn"
                type="submit"
                disabled={isLoading}>
                {isLoading
                  ? "Sending..."
                  : "SEND NOW"}{" "}
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </form>

      {isLoading && (
        <div className="loading-spinner">
          <p>Message is being sent...</p>
        </div>
      )}
    </div>
  );
};

export default Form;
