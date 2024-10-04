"use client";

import { useRouter } from "next/navigation";

export default function Admin() {
  const router = useRouter();
  return router.push("/admin/consultations");
}
