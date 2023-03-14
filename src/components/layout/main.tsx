import { Auth } from "@/hocs/Auth";
import { LayoutProps } from "@/types/common";

export function MainLayout(props: LayoutProps) {
  return (
    <Auth>
      <div className="main-layout">
        <h1>main</h1>
        {props.children}
      </div>
    </Auth>
  );
}
