import Link from "next/link";
import React from "react";
import styles from "styles";

export const AdminNavbar = () => {
  return (
    <nav className="p-3 border border-b-gray-500">
      <div
        className={`${styles.innerWidth} px-8 mx-auto flex flex-col justify-between gap-3`}
      >
        {/* SLOGAN */}
        <h1 className={`${styles.heroHeading} text-center`}>
          Administra tus propiedades
        </h1>
        {/* LINKS */}
        <ul className="flex gap-5 z-50 items-center justify-center">
          <Link className="text-gray-800" href="/admin/create">
            Crear Propiedad
          </Link>
          <Link className="text-gray-800" href="/admin/dashboard">
            Propiedades
          </Link>
        </ul>
      </div>
    </nav>
  );
};
