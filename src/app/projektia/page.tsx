import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";
import { revalidatePath } from "next/cache";
import { addComment, deleteComment } from "@/app/_actions/actions";
import AddComment from "@/components/AddComment";
import React from "react";
import { Schema } from "../../../amplify/data/resource";

const Posts = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;

  const isSignedIn = await isAuthenticated();
  const { data: post } = await cookieBasedClient.models.Post.get(
    {
      id: params.id,
    },
    {
      authMode: "apiKey",
      selectionSet: ["id", "title"],
    }
  );
  const { data: allComments } = await cookieBasedClient.models.Comment.list({
    authMode: "apiKey",
    selectionSet: ["content", "post.id", "id"],
  });

  const comments = allComments.filter(
    (comment) => comment.post.id === params.id
  );

  return (
    <main className="flex flex-col items-center justify-between p-24 w-1/2 m-auto">
    <h1 className="text-2xl pb-10">Zemāk Matterport projekti admin lietotājiem pēc pieslēgšanās.</h1>



    <iframe width='853' height='480' src='https://my.matterport.com/show/?m=mDTtRrrERwo'></iframe>



  </main>
  );
};

export default Posts;
