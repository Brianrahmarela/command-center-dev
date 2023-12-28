import React from "react";
import FormLogin from "@/components/login/form-login";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const page = () => {
  return (
    <div className="flex flex-col justify-center  items-center ">
      <Card className="max-w-md w-full ">
        <CardHeader>
          <CardTitle>Login Page</CardTitle>
        </CardHeader>
        <CardContent>
          <FormLogin />
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
