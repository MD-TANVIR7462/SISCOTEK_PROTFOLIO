import { XCircleIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <XCircleIcon className="h-[5rem] w-[5rem] text-danger" />
      <h2 className="text-6xl font-medium text-danger">404</h2>
      <p>Page not found!</p>
      <Link href="/">
        <Button variant="bordered">Go Home</Button>
      </Link>
    </div>
  );
}
