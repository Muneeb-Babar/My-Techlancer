import { useForm } from 'react-hook-form';
import Swal from 'sweetalert';
import { useState } from 'react';
import { sendMessage } from '../../Config/Api'
const Form = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (formData) => {
        setIsLoading(true);

        try {
            const response = await sendMessage(formData); 

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
            console.error('Error:', error);
            setIsLoading(false);
            showError("Something went wrong. Please try again.");
        }
    };

    const handleErrorResponse = (response) => {
        if (response.status === 400) {
            showError("Invalid input. Please check your data.");
        } else {
            showError("Error sending message. Please try again.");
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
            <form id="dreamit-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    {['name', 'email', 'subject', 'phone'].map((field, index) => (
                        <div className="col-lg-6" key={index}>
                            <div className="form_box">
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    {...register(field, { required: "This field is required" })}
                                    placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                                />
                                {errors[field] && <span className="error-message">{errors[field].message}</span>}
                            </div>
                        </div>
                    ))}
                    <div className="col-lg-12">
                        <div className="form_box">
                            <textarea
                                {...register('message', { required: "Message is required" })}
                                cols="30"
                                rows="10"
                                placeholder="Message"
                            />
                            {errors.message && <span className="error-message">{errors.message.message}</span>}
                        </div>
                        <div className="quote_button">
                            <button className="btn" type="submit" disabled={isLoading}>
                                {isLoading ? "Sending..." : "SEND NOW"} <i className="bi bi-arrow-right"></i>
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
