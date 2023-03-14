import { LayoutProps } from "@/types/common";

export function AdminLayout(props: LayoutProps) {
  return (
    <div className="admin-layout">
      <h1>admin</h1>
      {props.children}
    </div>
  );
}
