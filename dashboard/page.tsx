import { auth } from "@/lib/auth";
import DashboardClientPage from "./dashboard-client";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getNotice } from "@/lib/actions/notice-action";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/login");
  }
  const notices = await getNotice();
  return <DashboardClientPage session={session} initialNotices={notices || []} />;
}
