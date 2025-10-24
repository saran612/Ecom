import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  return (
    <>
      <h1 className="font-headline text-2xl font-bold">My Profile</h1>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Update your personal details here.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" defaultValue="Sofia Davis" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="sofia.davis@email.com" />
            </div>
             <Button>Save Changes</Button>
          </CardContent>
        </Card>
        <Card>
            <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
                <Avatar className="h-24 w-24">
                    <AvatarImage src="https://picsum.photos/seed/301/100/100" />
                    <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <Button variant="outline">Upload New Picture</Button>
            </CardContent>
        </Card>
      </div>
    </>
  );
}
