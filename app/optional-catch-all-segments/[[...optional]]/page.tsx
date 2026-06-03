import React from "react";

export default async function nice({
  params,
}: {
  params: Promise<{ yo: string[] }>;
}) {
  const resolvedParams = await params;
  return (
    <div>
      <h1>
        this also allows the parent route/segment without any child
        routes/segment which the normal catch all doesnt. path:
        {resolvedParams.yo}
      </h1>
    </div>
  );
}
