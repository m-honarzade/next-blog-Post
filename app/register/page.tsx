import Container from "@/components/Container";
import RegisterForm from "@/components/form/RegisterForm";
import React from "react";

const Register = ({ searchParams }: { searchParams: { mode: string } }) => {
  const modeForm = searchParams.mode || "login";
  return (
    <div className="mt-20">
      <Container>
        <RegisterForm mode={modeForm} />
      </Container>
    </div>
  );
};

export default Register;
