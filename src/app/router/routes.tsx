import { Navigate, type RouteObject } from "react-router"
import { AdminLayout } from "@/app/layouts/AdminLayout"
import { RootLayout } from "@/app/layouts/RootLayout"
import type { Section } from "@/types"
import { PageLoader } from "./PageLoader"
import { RoleGuard } from "./RoleGuard"
import { paths } from "./paths"

/** Lazily load a named export from a feature module (one chunk per feature). */
const page = (
  load: () => Promise<Record<string, any>>,
  name: string
): Pick<RouteObject, "lazy"> => ({
  lazy: async () => ({ Component: (await load())[name] }),
})

interface CrudPages {
  list: Pick<RouteObject, "lazy">
  form?: Pick<RouteObject, "lazy">
  detail: Pick<RouteObject, "lazy">
}

/** /section, /section/new, /section/:id, /section/:id/edit — guarded by role. */
const crud = (
  section: Section,
  { list, form, detail }: CrudPages
): RouteObject => ({
  path: section,
  element: <RoleGuard section={section} />,
  children: [
    { index: true, ...list },
    ...(form
      ? [
          { path: "new", ...form },
          { path: ":id/edit", ...form },
        ]
      : []),
    { path: ":id", ...detail },
  ],
})

const auth = () => import("@/features/auth")
const settings = () => import("@/features/settings")
const errors = () => import("@/features/errors")

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    HydrateFallback: PageLoader,
    children: [
      // ---------- Public / auth ----------
      {
        lazy: async () => ({ Component: (await auth()).AuthLayout }),
        children: [
          { path: "login", ...page(auth, "LoginPage") },
          { path: "forgot-password", ...page(auth, "ForgotPasswordPage") },
          {
            path: "reset-password",
            children: [
              {
                index: true,
                lazy: async () => {
                  const { CreatePasswordPage } = await auth()
                  return {
                    Component: () => <CreatePasswordPage flow="reset" />,
                  }
                },
              },
              {
                path: "verify",
                lazy: async () => {
                  const { VerifyCodePage } = await auth()
                  return { Component: () => <VerifyCodePage flow="reset" /> }
                },
              },
            ],
          },
          {
            path: "invite/:token",
            children: [
              { index: true, ...page(auth, "InviteWelcomePage") },
              {
                path: "verify",
                lazy: async () => {
                  const { VerifyCodePage } = await auth()
                  return { Component: () => <VerifyCodePage flow="invite" /> }
                },
              },
              {
                path: "create-password",
                lazy: async () => {
                  const { CreatePasswordPage } = await auth()
                  return {
                    Component: () => <CreatePasswordPage flow="invite" />,
                  }
                },
              },
            ],
          },
        ],
      },

      // ---------- Authenticated workspace ----------
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <Navigate to={paths.dashboard} replace /> },
          {
            path: "dashboard",
            ...page(() => import("@/features/dashboard"), "DashboardPage"),
          },

          crud("admins", {
            list: page(() => import("@/features/admins"), "AdminListPage"),
            form: page(() => import("@/features/admins"), "AdminFormPage"),
            detail: page(() => import("@/features/admins"), "AdminDetailPage"),
          }),
          crud("roles", {
            list: page(() => import("@/features/roles"), "RoleListPage"),
            form: page(() => import("@/features/roles"), "RoleFormPage"),
            detail: page(() => import("@/features/roles"), "RoleDetailPage"),
          }),
          crud("categories", {
            list: page(
              () => import("@/features/categories"),
              "CategoryListPage"
            ),
            form: page(
              () => import("@/features/categories"),
              "CategoryFormPage"
            ),
            detail: page(
              () => import("@/features/categories"),
              "CategoryDetailPage"
            ),
          }),
          crud("products", {
            list: page(() => import("@/features/products"), "ProductListPage"),
            form: page(() => import("@/features/products"), "ProductFormPage"),
            detail: page(
              () => import("@/features/products"),
              "ProductDetailPage"
            ),
          }),
          crud("orders", {
            list: page(() => import("@/features/orders"), "OrderListPage"),
            detail: page(() => import("@/features/orders"), "OrderDetailPage"),
          }),
          crud("support", {
            list: page(() => import("@/features/support"), "SupportListPage"),
            detail: page(
              () => import("@/features/support"),
              "SupportDetailPage"
            ),
          }),
          crud("wholesale", {
            list: page(
              () => import("@/features/wholesale"),
              "WholesaleListPage"
            ),
            detail: page(
              () => import("@/features/wholesale"),
              "WholesaleDetailPage"
            ),
          }),

          {
            path: "notifications",
            ...page(
              () => import("@/features/notifications"),
              "NotificationsPage"
            ),
          },
          {
            path: "settings",
            ...page(settings, "SettingsLayout"),
            children: [
              { index: true, ...page(settings, "StoreSettingsPage") },
              {
                path: "notifications",
                ...page(settings, "NotificationSettingsPage"),
              },
              { path: "content", ...page(settings, "ContentSettingsPage") },
              { path: "profile", ...page(settings, "ProfileSettingsPage") },
            ],
          },
          { path: "access-denied", ...page(errors, "AccessDeniedPage") },
          { path: "*", ...page(errors, "NotFoundPage") },
        ],
      },
    ],
  },
]
