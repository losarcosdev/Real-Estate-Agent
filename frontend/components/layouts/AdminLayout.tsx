import { AdminNavbar } from "components/ui";
import Head from "next/head";

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <AdminNavbar />
      </nav>
      <main>{children}</main>
    </>
  );
};
