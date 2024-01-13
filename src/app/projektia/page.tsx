import { cookieBasedClient, isAuthenticated } from "@/utils/amplify-utils";

export default async function Home() {
  const isSignedIn = await isAuthenticated();
;
  

  return (
    <main className="flex flex-col items-center justify-between p-24 w-1/2 m-auto">
{isSignedIn ? (
  
    <iframe width='853' height='480' src='https://my.matterport.com/show/?m=mDTtRrrERwo'></iframe>

  ) : null}

</main>
  );

}
