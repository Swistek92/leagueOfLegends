"use client";
import { useEffect, useState } from "react";
import React from "react";
import { ChampionType } from "../types";
import Image from "next/image";
const Select = ({
  tags,
  champions,
}: {
  tags: string[];
  champions: ChampionType[];
}) => {
  const [select, setSelectValue] = useState<string>(tags[0]);
  const [filterValue, setFilterValue] = useState<string>("");
  const [filteredChampions, setFilteredChmapions] =
    useState<ChampionType[]>(champions);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [noChempions, setNoChempions] = useState(false);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectValue(event.target.value);
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilterValue(event.target.value);

  useEffect(() => {
    const filtered = champions.filter((champion) => {
      const matchesTag = select === "All" || champion.tags.includes(select);
      const matchesSearch =
        champion.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        champion.title.toLowerCase().includes(filterValue.toLowerCase());
      return matchesTag && matchesSearch;
    });

    setFilteredChmapions(filtered);
  }, [select, filterValue, champions]);

  return (
    <div className=''>
      <div className='flex items-center justify-center w-full bg-red-600 fixed top-0 h-10'>
        <button className='w-full' onClick={() => setShowFilter(!showFilter)}>
          {!showFilter ? "show filter" : "hide filter"}
        </button>
      </div>
      {showFilter && (
        <div className='fixed top-10 z-30 w-full bg-red-400 '>
          <div>
            <h5 className='flex justify-center text-black text-lg font-bold mb-1'>
              Select type
            </h5>
            <select
              value={select}
              onChange={handleSelectChange}
              className='bg-red-300 border border-red-200 text-black text-lg rounded-lg focus:ring-red-300 focus:border-red-500 block w-full p-1 '
            >
              {tags.map((e) => (
                <option
                  key={e}
                  value={e}
                  className='bg-red-300 flex text-center hover:bg-red-500'
                >
                  {e}
                </option>
              ))}
            </select>
            <h5 className='flex justify-center text-black text-lg font-bold mb-1'>
              Search...
            </h5>
            <input
              className='w-full p-1 rounded-lg border bg-red-300 border-red-400 focus:outline-none focus:border-red-500 text-black text-lg'
              type='text'
              placeholder='Search...'
              value={filterValue}
              onChange={handleFilterChange}
            />
          </div>
        </div>
      )}

      <div className='flex flex-col items-center bg-blue-500  '>
        {filteredChampions.map((e) => {
          return (
            <div
              key={e.key}
              className='bg-red-300 w-80 rounded-lg m-3 p-3 flex flex-col cursor-pointer items-center hover:bg-red-700'
            >
              <hr />
              <h1 className='text-4xl'>{e.id}</h1>
              <Image
                width={100}
                height={100}
                alt='champ'
                src={`http://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${e.id}.png`}
              />

              {e.tags.map((e) => (
                <p key={e}>{e}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
