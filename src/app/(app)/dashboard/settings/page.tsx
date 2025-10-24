import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function SettingsPage() {
  return (
    <>
      <h1 className="font-headline text-2xl font-bold">Settings</h1>
      <div className="mt-6 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Store Settings</CardTitle>
            <CardDescription>
              Customize your public-facing store.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="store-name">Store Name</Label>
              <Input id="store-name" defaultValue="Leather Lux" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="store-description">Store Description</Label>
              <Textarea
                id="store-description"
                defaultValue="Specializing in high-quality, handcrafted leather goods."
                rows={3}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Store Logo</Label>
                <Input type="file" />
              </div>
              <div className="space-y-2">
                <Label>Store Banner</Label>
                <Input type="file" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Save</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Choose what you want to be notified about.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <Checkbox id="new-order" defaultChecked />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="new-order">New Orders</Label>
                <p className="text-sm text-muted-foreground">
                  Receive an email when a new order is placed.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Checkbox id="review" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="review">Product Reviews</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when a customer leaves a review.
                </p>
              </div>
            </div>
          </CardContent>
           <CardFooter className="border-t px-6 py-4">
            <Button>Save</Button>
          </CardFooter>
        </Card>

        <Card className="border-destructive">
          <CardHeader>
            <CardTitle>Danger Zone</CardTitle>
            <CardDescription>
              These actions are permanent and cannot be undone.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="destructive">Delete Account</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
