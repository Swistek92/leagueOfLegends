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
  const [filteredChmepions, setFilteredChmepions] =
    useState<ChampionType[]>(champions);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectValue(event.target.value);
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilterValue(event.target.value);

  useEffect(() => {
    // Filter champions based on the selected tag and filter input
    const filtered = champions.filter((champion) => {
      const matchesTag = select === "All" || champion.tags.includes(select);
      const matchesSearch =
        champion.name.toLowerCase().includes(filterValue.toLowerCase()) ||
        champion.title.toLowerCase().includes(filterValue.toLowerCase());
      return matchesTag && matchesSearch;
    });

    setFilteredChmepions(filtered);
  }, [select, filterValue, champions]);

  return (
    <div>
      <div>
        <h5 className='flex justify-center text-white text-lg font-bold mb-2'>
          Select type
        </h5>
        <select
          value={select}
          onChange={handleSelectChange}
          className=' bg-blue-500 border border-blue-400 text-white text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-4 '
        >
          {tags.map((e) => (
            <option key={e} value={e} className='bg-blue-500 flex text-center'>
              {e}
            </option>
          ))}
        </select>
        <h5 className='flex justify-center text-white text-lg font-bold mb-2'>
          Search...
        </h5>
        <input
          className='w-full p-2 rounded-lg border border-blue-400 focus:outline-none focus:border-blue-500 text-white text-lg'
          type='text'
          placeholder='Search...'
          value={filterValue}
          onChange={handleFilterChange}
        />
      </div>
      <div className='flex flex-col items-center m-3 p-3'>
        {filteredChmepions.map((e) => {
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
    </div>
  );
};

export default Select;
