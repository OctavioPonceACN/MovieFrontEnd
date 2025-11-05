import { useState } from "react";
import type { UseUserFormReturn } from "../types/UseUserFormReturn";
import type { UserFormData } from "../types/UserFormData";
import { useNavigate } from "react-router-dom";
import { validate_email, validate_username } from "../utils/formValidation";

function useUserForm(
  initialState: Omit<UserFormData, "id">
): UseUserFormReturn {
  const [formData, setFormData] =
    useState<Omit<UserFormData, "id">>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const nameError = validate_username(formData.username);
    const emailError = validate_email(formData.email);

    if (nameError) newErrors["username"] = nameError;
    if (emailError) newErrors["email"] = emailError;

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateErrors = validateForm();
    console.log("Form submitted:", formData);
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    setErrors({});

    //navigate("/", { replace: true });
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
}

export default useUserForm;
