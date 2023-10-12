import Image from "next/image";
// import { json } from "stream/consumers";
import { ChampionType } from "../../types";
import { ChampionManager } from "../../helpers";
import { Select } from "../../components";
export const allChempions: string = "All";

export default async function Home() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion.json"
  );
  const { data } = await res.json();
  const championManager = new ChampionManager(data);
  championManager.addTag(allChempions);
  const tags = championManager.getAllUniqueTags();
  const chempions = championManager.getChempionsInArray();

  return (
    <main className='flex flex-col w-full text-black overflow-hidden'>
      <Select tags={tags} champions={chempions} />
      {/* <select
        id='countries'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      >
        {tags.map((e) => (
          <option value={e}> {e}</option>
        ))}
      </select>
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
      </div> */}
      {/* <div className='flex flex-col items-center m-3 p-3'>
        {chempions.map((e) => {
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
      </div> */}
    </main>
  );
}
