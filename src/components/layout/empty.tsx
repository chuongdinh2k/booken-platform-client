import { LayoutProps } from "@/types/common";

export function EmptyLayout(props: LayoutProps) {
  return (
    <div className="empty-layout">
      <h1>admin</h1>
      {props.children}
    </div>
  );
}
