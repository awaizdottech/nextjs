import React from "react";

export default async function nice({
  params,
}: {
  params: Promise<{ "path-param": string }>;
}) {
  const resolvedParams = await params;
  return (
    <div>
      <h1>
        Path Param: {resolvedParams["path-param"]} at
        route-level-1/route-level-2
      </h1>
    </div>
  );
}
