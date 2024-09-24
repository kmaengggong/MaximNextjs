"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";

export default function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    const path = usePathname();

    return (
        <Link
            href={href}
            className={
                path.startsWith(href) ? `${styles.link} ${styles.active}` : styles.link
            }
        >
            {children}
        </Link>
    )
}