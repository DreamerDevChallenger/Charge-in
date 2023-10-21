import LoginForm from "@/components/login/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charge-in | Login",
};

export default function Login() {
  return (
    <main>
      <section>
        <LoginForm />
      </section>
    </main>
  );
}
