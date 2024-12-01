"use client";
import RegisterForm from "@/components/auth/register";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

function RegisterPageContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "";
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative flex bg-white rounded-sm w-full max-w-3xl border border-gray-300 overflow-hidden">
        <div className="w-1/2 p-12">
          <RegisterForm initialEmail={email} />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="bg-gray-200 w-full h-full rounded-sm flex items-center justify-center">
            <Image
              src="/svg/registerdemo.svg"
              alt="Demo"
              width={380}
              height={900}
              className="absolute bottom-20 transform translate-x-20 max-w-full max-h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterPageContent />
    </Suspense>
  );
}
