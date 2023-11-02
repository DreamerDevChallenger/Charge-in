import FormControl from "@/components/materials/form-control";
import styled from "styled-components";

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

export default function FormContent() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => router.push("/dashboard");

  return (
    <StyledFormContent
      onSubmit={handleSubmit(onSubmit)}
      id="login-form"
      method="post"
    >
      <FormControl
        label="Email"
        htmlFor="email"
        type={"text"}
        placeholder="adresse@mail.com"
        register={register}
        errors={errors}
        pattern={/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g}
        message="adresse@mail.com ou adresse.city@mail.com"
        name="L'Email"
      />
      <FormControl
        label="Mot de passe"
        htmlFor="password"
        type={"password"}
        placeholder="******"
        register={register}
        errors={errors}
        pattern={
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
        }
        message="Password1234@ ou 1234passworD$"
        name="Le Mot De Passe"
      />
    </StyledFormContent>
  );
}

const StyledFormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
