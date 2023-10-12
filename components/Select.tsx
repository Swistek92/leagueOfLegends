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
    <div className='bg-red-100'>
      <div className='fixed top-0 z-30 w-full bg-red-400'>
        <h5 className='flex justify-center text-black text-lg font-bold mb-2'>
          Select type
        </h5>
        <select
          value={select}
          onChange={handleSelectChange}
          className='bg-red-300 border border-red-200 text-black text-lg rounded-lg focus:ring-red-300 focus:border-red-500 block w-full p-2.5 mb-4'
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
        <h5 className='flex justify-center text-black text-lg font-bold mb-2'>
          Search...
        </h5>
        <input
          className='w-full p-2 rounded-lg border bg-red-300 border-red-400 focus:outline-none focus:border-red-500 text-black text-lg'
          type='text'
          placeholder='Search...'
          value={filterValue}
          onChange={handleFilterChange}
        />
      </div>

      <div className='flex flex-col items-center mt-2 '>
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
