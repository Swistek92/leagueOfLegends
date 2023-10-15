import { ChempionsList } from "../../components";
import { ChampionManager } from "../../helpers";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
export default async function Home() {
  /////////// CHEMPIONS
  const allChempions: string = "All";
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/13.19.1/data/en_US/champion.json"
  );
  const { data } = await res.json();
  const championManager = new ChampionManager(data);
  championManager.addTag(allChempions);
  const tags = championManager.getAllUniqueTags();
  const chempions = championManager.getChempionsInArray();
  ///////// SESSION

  const session = await getServerSession(options);

  if (session) {
    const user = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(session.user),
    });
    const userData = await user.json();
    console.log(userData);
  }
  console.log(chempions);
  return (
    <main className='w-full overflow-hidden bg-red-100   '>
      <div>
        <ChempionsList tags={tags} champions={chempions} />
      </div>
    </main>
  );
}
