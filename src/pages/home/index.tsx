import { MainLayout } from "@/components/layout";
import { useAuth } from "@/hooks/use-auth";

function Apps() {
  const { profile, isLoading } = useAuth();
  return <div>Home</div>;
}
Apps.Layout = MainLayout;
export default Apps;
