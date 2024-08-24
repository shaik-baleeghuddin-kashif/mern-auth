import { mailtrapClient, sender } from "./mailtrap.config.js"
import {PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE} from "./emailtemplates.js"

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}]

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification"
        })
        console.log("Email sent successfully", response)
    } catch (error) {
        console.error(`Error sending verification`, error)
        throw new Error(`Error Sending verification email: ${error}`);
        
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "c3d94ede-7ede-4c2a-85b3-d4fa2dff3507",
            template_variables: {
                "company_info_name": "S. B. KASHIF",
                "name": name
            }
        });

        console.log("Email sent Successfully", response)
    } catch (error) {
        
    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
        });
        console.log("Password reset link sent successfully", response)
    } catch (error) {
        console.error(`Error Sending Password reset email`, error);
        throw new Error(`Error sending Password reset email: ${error}`);
        
    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Successful ",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        });
        console.log("Password reset email sent successfully", response)
    } catch (error) {
        console.error(`Error Sending Password reset email`, error);
        throw new Error(`Error sending Password reset email: ${error}`);
        
    }
}