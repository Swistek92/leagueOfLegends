import Select from "../../components/Select";
import { ChampionManager } from "../../helpers";

export default async function Home() {
  const allChempions: string = "All";

  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion.json"
  );
  const { data } = await res.json();
  const championManager = new ChampionManager(data);
  championManager.addTag(allChempions);
  const tags = championManager.getAllUniqueTags();
  const chempions = championManager.getChempionsInArray();

  return (
    <main className='w-full overflow-hidden    '>
      <div className='mt-44'>
        <Select tags={tags} champions={chempions} />
      </div>
    </main>
  );
}
