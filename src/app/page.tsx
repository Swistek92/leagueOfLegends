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
    <main className='w-full overflow-hidden bg-red-100    '>
      <div className='mt-44'>
        <Select tags={tags} champions={chempions} />
      </div>
    </main>
  );
}
