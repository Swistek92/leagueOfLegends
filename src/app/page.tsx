import Image from "next/image";
// import { json } from "stream/consumers";
import objectToArray from "../../helpers/objectToArray";
import { ChampionType } from "../../types";

function getAllUniqueTags(champions: ChampionType[]): string[] {
  const uniqueTags: string[] = ["All"];

  champions.forEach((champion) => {
    champion.tags.forEach((tag) => {
      if (!uniqueTags.includes(tag)) {
        uniqueTags.push(tag);
      }
    });
  });

  return uniqueTags;
}

export default async function Home() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion.json"
  );
  const { data } = await res.json();
  const arr: ChampionType[] = objectToArray(data);
  const tags = getAllUniqueTags(arr);

  return (
    <main className='flex flex-col w-full text-black overflow-hidden'>
      <div className='flex flex-wrap   justify-between w-full '>
        <h1 className='w-full'>Filter</h1>
        {tags.map((e) => (
          <div className='border p-1 bg-red-400'>
            <p className='cursor-pointer'>{e}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
        <input type='text' className='border border-b-lime-400 w-80  m-3 p-2' />
      </div>
      <div className='flex flex-col items-center m-3 p-3'>
        {arr.map((e) => {
          return (
            <div className=' bg-red-300 w-screen  m-3 p-3 flex flex-col items-center'>
              <hr />
              <h1 className='text-4xl'>{e.id}</h1>
              <Image
                width={100}
                height={100}
                alt='chemp'
                src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${e.id}.png`}
              />
              <div>
                {e.tags.map((e) => (
                  <p>{e}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
