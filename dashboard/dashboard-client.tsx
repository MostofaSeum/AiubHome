"use client";
import { signOut } from "@/lib/actions/auth-actions";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Session, User } from "better-auth";
import { useState } from "react";
import { createNotice, deleteNotice, updateNotice } from "@/lib/actions/notice-action";

export default function DashboardClientPage({
  session,
  initialNotices,
}: {
  session: { session: Session; user: User };
  initialNotices: any[];
}) {
  const [notices, setNotices] = useState(initialNotices || []);
  const [noticeName, setNoticeName] = useState("");
  const [noticeStatus, setNoticeStatus] = useState("draft");
  const [editingNoticeId, setEditingNoticeId] = useState<string | null>(null);
  const user = session.user;
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/login");
  };

  // save notice handle
  const handleSaveNotice = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!noticeName.trim()) {
      return;
    }

    if (editingNoticeId) {
      //update exisitng notice
      const res = await updateNotice(editingNoticeId, noticeName, noticeStatus);
      if (res?.success) {
        setNotices(
          notices.map((n) =>
            n.id === editingNoticeId ? { ...n, name: noticeName, status: noticeStatus } : n,
          ),
        );
        setEditingNoticeId(null);
        setNoticeName("");
        setNoticeStatus("draft");
      }
    } else {
      //create new notice
      const res = await createNotice(noticeName, session.user.id, noticeStatus);
      if (res.success && res.notice) {
        setNotices([
          {
            id: res.notice._id,
            name: res.notice.name,
            userId: res.notice.userId,
            status: res.notice.status,
            createdAt: new Date().toString(),
          },
          ...notices
        ]);
        setNoticeName("");
        setNoticeStatus("draft");
      }
    }
  };

  //Delete Notice
  const handleDelete = async (id: string) => {
  if (confirm("Are you sure you want to delete this notice?")) {
    const res = await deleteNotice(id);
    if (res.success) {
      setNotices(notices.filter((n) => n.id !== id));
    }
  }
};

// Cancel button
const handleCancelEdit = () => {
  setEditingNoticeId(null);
  setNoticeName("");
  setNoticeStatus("draft");
};



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-20">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Welcome to Your Dashboard!
                </h2>
                <p className="text-gray-600">
                  Manage your account and explore better-auth features
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-3">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    }
                  />
                  <div className="text-sm">
                    <p className="text-gray-900 font-medium">{user.name}</p>
                    <p className="text-gray-500">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Authentication Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-medium text-blue-900 mb-2">
                Authentication Status
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-blue-700">Status:</span>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Authenticated
                  </span>
                </div>
                <div>
                  <span className="font-medium text-blue-700">Provider:</span>
                  <span className="ml-2 text-blue-600">Better-Auth</span>
                </div>
                <div>
                  <span className="font-medium text-blue-700">User ID:</span>
                  <span className="ml-2 text-blue-600">{user.id}</span>
                </div>
                <div>
                  <span className="font-medium text-blue-700">
                    Email Verified:
                  </span>
                  <span className="ml-2 text-blue-600">
                    {user.emailVerified ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>

            {/* Notice Management Section */}
            <div className="mt-8 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Left Column: Form to Add/Edit Notice */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {editingNoticeId ? "Edit Notice" : "Add New Notice"}
                </h3>
                <form onSubmit={handleSaveNotice} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Notice Title
                    </label>
                    <textarea
                      value={noticeName}
                      onChange={(e) => setNoticeName(e.target.value)}
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                      placeholder="Type the notice content..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      value={noticeStatus}
                      onChange={(e) => setNoticeStatus(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900"
                    >
                      <option value="draft">Draft (Hidden)</option>
                      <option value="published">Published (Public)</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="flex-1 inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {editingNoticeId ? "Update Notice" : "Publish Notice"}
                    </button>
                    {editingNoticeId && (
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Right Column: Existing Notices List */}
              <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Notice History</h3>
                {notices.length === 0 ? (
                  <p className="text-gray-500 text-sm">No notices published yet.</p>
                ) : (
                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                    {notices.map((notice) => (
                      <div
                        key={notice.id}
                        className="p-4 bg-white rounded-md border border-gray-200 shadow-sm flex justify-between items-start gap-4"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                                notice.status === "published"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {notice.status === "published" ? "Published" : "Draft"}
                            </span>
                            <span className="text-[10px] text-gray-400">
                              {new Date(notice.createdAt).toLocaleString()}
                            </span>
                          </div>
                          <p className="text-gray-800 text-sm font-medium whitespace-pre-wrap mt-1">
                            {notice.name}
                          </p>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => {
                              setEditingNoticeId(notice.id);
                              setNoticeName(notice.name);
                              setNoticeStatus(notice.status || "draft");
                            }}
                            className="text-xs font-semibold text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(notice.id)}
                            className="text-xs font-semibold text-red-600 hover:text-red-900"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

            {/* Navigation */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  ← Back to Home
                </Link>
                <Link
                  href="/auth"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                >
                  Manage Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
