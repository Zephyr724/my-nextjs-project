import React from "react";

interface Props {
  params: Promise<{ id: number; photoId: number }>;
}

const page = async ({ params }: Props) => {
  const { id, photoId } = await params;
  return (
    <div>
      {id} page {photoId}
    </div>
  );
};

export default page;
