import { AppButton } from "@/components/common/button/AppButton";
import { AdminLayout } from "@/components/layout";
import { useRouter } from "next/router";

function About() {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <AppButton onClick={() => router.push("/auth/login")} text="login" />
    </div>
  );
}
About.Layout = AdminLayout;
export default About;
