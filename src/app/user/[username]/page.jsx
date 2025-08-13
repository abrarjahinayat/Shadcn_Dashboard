import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetTrigger } from "@/components/ui/sheet";
import UserFrom from "@/components/UserFrom";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import CardList from "@/components/CardList";

const Singleuserpage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">DashBoard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/user">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Abrar Jahin</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT CONTAINER */}
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-lg font-medium mb-4">User Badges</h1>
            <div className="flex items-center gap-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield
                    size={36}
                    className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Admin</h1>
                  <p className="text-sm text-muted-foreground">
                    Admin users have access to all features and can manage
                    users.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy
                    size={36}
                    className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Awarded</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been awarded for their contributions.
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus
                    size={36}
                    className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been popular in the community.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-medium mb-4">User Information</h1>
              <div>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="default">Edit User</Button>
                  </SheetTrigger>
                  <UserFrom />
                </Sheet>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-4">
                Profile completion
              </p>
              <Progress value={66} />
            </div>
            {/* User Details */}
            <div className="mt-4 flex items-center gap-3">
              <p className="text-sm  ">User Name:</p>
              <p className="text-sm font-medium text-muted-foreground">Abrar Jahin</p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <p className="text-sm  ">Email:</p>
              <p className="text-sm font-medium text-muted-foreground">abrarjahin@gmail.com</p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <p className="text-sm  ">Phone:</p>
              <p className="text-sm font-medium text-muted-foreground">+8801712345678</p>
            </div> 
            <div className="mt-4 flex items-center gap-3">
              <p className="text-sm  ">Location:</p>
              <p className="text-sm font-medium text-muted-foreground">Dhaka,Bangladesh</p>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <p className="text-sm  ">Role:</p>
              <Badge>Admin</Badge>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Joined on 01/01/2025</p>
            <div />
          </div>
            {/* CARD LIST CONTAINER */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleuserpage;
