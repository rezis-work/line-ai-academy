import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button>Hello World</Button>
      <UserButton />
    </div>
  );
}
