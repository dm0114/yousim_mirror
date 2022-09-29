import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

import {
  SearchInfoImgTextWrapper,
  SearchMarginDiv,
  SloganContainer,
} from "styles/searchStyles/SearchStyle";

import SearchBar from "src/components/SearchBar";
import NavBar from "src/components/NavBar";
import ChannelInfo from "src/components/ChannelInfo";
import SearchList from "src/components/SearchList";
import { useEffect, useLayoutEffect, useState } from "react";
import TitleImg from "/public/images/titleImg.jpg";
import {
  VideoListContainer,
  VideoListContainerInnerWrapper,
} from "styles/channelDetail/VideoListContainerStyle";
import apisearchList from "src/pages/api/apisearchList";
import { useRecoilState } from "recoil";
import { aSerachList } from "states/atom";
import { useQuery } from "react-query";

interface ISearchItem {
  id: string;
  banner: string;
  name: string;
  description: string;
  subscriber: number;
  video: number;
  thumbnail: string;
  time: string;
  view: number;
}

const SearchPage: NextPage = () => {
  const router = useRouter();
  const [name, setName] = useState<string>();
  const searchName = router.query.id?.toString();

  // const [searchList, setSearchList] = useRecoilState<ISearchItem[]>(aSerachList)
  const {
    data: searchList,
    error,
    status,
  } = useQuery(
    ["searchList"],
    () => {
      apisearchList(searchName);
    },
    {
      enabled: !!searchName,
    }
  );

  if (status === "loading") {
    return <span>Loading...</span>;
  }

  if (status === "error") {
    return <span>Error: {error.message} </span>;
  }

  useEffect(() => {
    apisearchList(searchName).then((data) => {
      setSearchList(data);
    });
  }, [searchName]);


  return (
    <>
      <Head>
        <title>검색</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <SearchMarginDiv />
        <VideoListContainer>
          <SearchList datas={searchList} />
        </VideoListContainer>
      </main>
    </>
  );
};

export default SearchPage;
