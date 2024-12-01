import CreateTemplate from "@/components/dashboard/mytemplates/CreateTemplate";
import React, { Suspense } from "react";

export default function CreateTemplatePage() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
        <CreateTemplate />
      </Suspense>
    </>
  );
}
