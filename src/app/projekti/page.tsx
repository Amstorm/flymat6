import Post from "@/components/Post";
import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";
import { onDeletePost } from "../_actions/actions";

export default async function Home() {
  const { data: posts } = await cookieBasedClient.models.Post.list({
    selectionSet: ["title", "id"],
    authMode: "apiKey",
  });

  console.log("posts", posts);

  return (
    <main className="flex flex-col items-center justify-between p-24 w-1/2 m-auto">
      <h1 className="text-2xl pb-10">Zemāk integrējam, piemēram, publiski pieejamus Matterport projektus</h1>



<iframe width='853' height='480' src='https://my.matterport.com/show/?m=mDTtRrrERwo'></iframe>



</main>
  );
}
