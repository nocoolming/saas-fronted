import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import dotenv from 'dotenv'
import { useEffect } from "react";
import { environment } from "service";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// export async function loader({ params }: Route.LoaderArgs) {
//   return {
//     env: process.env,
//   }
// }

export default function Home({
  // loaderData
}: Route.ComponentProps) {
  // const { env } = loaderData
  // console.log(JSON.stringify(env));


  return (
    <div>
      <h1>Home</h1>

      <p>api: {import.meta.env.VITE_API_SERVICE}</p>
      {/* <p>{env.VITE_USER_SERVICE}</p> */}
    </div>
  );
}
