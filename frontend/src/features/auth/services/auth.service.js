import { publicAxios } from "../../../lib/apiSetup";

/**
 * Sends a POST request to sign up a new user.
 * @param {Object} data - The data for user registration.
 * @returns {Object} - The response data from the API.
 * @throws {Error} - If the sign-up request fails.
 */
export const signUpService = async (data) => {
  try {
    const response = await publicAxios.post(`/auth/sign-up`, data);
    return response.data;
  } catch (error) {
    console.error("Error while signing up:", error);
    throw error;
  }
};

// Your existing functions...
export const signInService = async (data) => {
  try {
    const response = await publicAxios.post(`/auth/sign-in`, data);
    return response.data;
  } catch (error) {
    console.error("Error while sign in:", error);
    throw error;
  }
};

export const signOutService = () => {
  try {
    localStorage.removeItem("_u_at_i");
  } catch (error) {
    console.error("Error during sign out:", error);
    throw new Error("Failed to sign out. Please try again.");
  }
};