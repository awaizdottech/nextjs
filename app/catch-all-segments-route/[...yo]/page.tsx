import React from "react";

export default async function nice({
  params,
}: {
  params: Promise<{ yo: string[] }>;
}) {
  const resolvedParams = await params;
  return (
    <div>
      <h1>path {resolvedParams.yo.join(" / ")}</h1>
    </div>
  );
}
