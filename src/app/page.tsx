import Image from "next/image";
// import { json } from "stream/consumers";
import objectToArray from "../../helpers/objectToArray";
import { ChampionType } from "../../types";

export default async function Home() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion.json"
  );
  const { data } = await res.json();
  const arr: ChampionType[] = objectToArray(data);
  console.log(arr);

  return (
    <main className='container text-black'>
      {arr.map((e) => {
        return (
          <div className='bg-red-300 w-full m-3 p-3'>
            <hr />
            <h1 className='text-4xl'>{e.id}</h1>
            <p>
              {e.tags.map((e) => (
                <p>{e}</p>
              ))}
            </p>
          </div>
        );
      })}
    </main>
  );
}
