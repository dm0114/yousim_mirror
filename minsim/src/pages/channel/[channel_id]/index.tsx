import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

import SearchBar from "src/components/SearchBar";
import NavBar from "src/components/NavBar";
import Banner from "styles/channelDetail/BannerStyle";

import ChannelInfo from "src/components/ChannelInfo";
import {
  ChannelInfoContainer,
  ChannelInfoContainerInnerWrapper,
  ChannelInfoImgTextWrapper,
  ImgDiv,
} from "styles/channelDetail/ChannelInfoContainerStyle";
import TitleImg from "/public/images/titleImg.jpg";
import Tags from "src/components/Tags";
import ChannelMinsimText from "src/components/ChannelMinsimText";
import VideoListTitle from "styles/channelDetail/VideoListSectionTitleStyle";
import {
  VideoListContainer,
  VideoListContainerInnerWrapper,
} from "styles/channelDetail/VideoListContainerStyle";
import VideoTags from "src/components/VideoTags";
import { useEffect, useState } from "react";
import VideoList from "src/components/VideoList";
<<<<<<< HEAD
import apiIniVideoList from "src/pages/api/apIniivideoList";



=======
import apiIniVideoList from "src/pages/api/apiIniiVideoList";
import { useQuery } from "@tanstack/react-query";
import SearchList from "src/components/SearchList";
import { useRecoilState, useRecoilValue } from "recoil";
import { aChData } from "states/atom";
>>>>>>> ffc94d9ff47f5cbcbd43162a8e84bdfdf0b2f023

interface IVideo {
  categoryId: number;
  channelTitle: string | null;
  comment: number;
  description: string;
  id: string;
  like: number;
  nextToken: string;
  tag: [];
  thumbnail: string;
  time: string;
  title: string;
  view: number
}

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

const ChannelDetailPage: NextPage = () => {
  const router = useRouter();
  const query = router.query;
  const [chData, setChData] = useRecoilState<ISearchItem>(aChData)
  const {data:videos, status} = useQuery<IVideo[]>(["video", query.channel_id], ()=>{
    return apiIniVideoList(query.channel_id)
  })

  // 임시
  console.log(query);
  console.log(query.channel_id);

<<<<<<< HEAD
  useEffect(() => {
    apiIniVideoList(query.channel_id?.toString()).then((data) => {
      setVideos(data);
    });

  }, []);

=======
>>>>>>> ffc94d9ff47f5cbcbd43162a8e84bdfdf0b2f023
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <section>
          <Banner src={chData.banner} alt="배너" />
          <ChannelInfoContainer>
            <ChannelInfoContainerInnerWrapper>
              <ChannelInfoImgTextWrapper>
                <ImgDiv>
                  <Image
                    src={chData.thumbnail}
                    alt="채널 대표 이미지"
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: "50%" }}
                  />
                </ImgDiv>
                <ChannelInfo
                  title={chData.name}
                  subscriber={chData.subscriber}
                  video={chData.video}
                  description={chData.description}
                ></ChannelInfo>
              </ChannelInfoImgTextWrapper>
              <Tags />
            </ChannelInfoContainerInnerWrapper>
          </ChannelInfoContainer>

          <ChannelMinsimText
            title="채널 민심"
            mainText="95%  떡상"
          ></ChannelMinsimText>
          <ChannelMinsimText
            title="가장 많이 언급된 키워드"
            mainText="특화는 이게 맞아"
          ></ChannelMinsimText>
        </section>
        <section>
          <VideoListTitle>채널 영상</VideoListTitle>

          {/* <VideoList videos={videos}  /> */}
          <VideoListContainer>
            <VideoListContainerInnerWrapper>
              <ChannelInfoImgTextWrapper>
                <Image
                  src={TitleImg}
                  alt="채널 대표 이미지"
                  width={"256px"}
                  height={"128px"}
                  objectFit="cover"
                  objectPosition="top"
                />
                <ChannelInfo
                  title="아이유"
                  sub1="구독자 127만명  |  동영상 6267개"
                  sub2="반갑습니다. 오늘도 즐거운 날입니다."
                ></ChannelInfo>
              </ChannelInfoImgTextWrapper>
              {/* <VideoTags /> */}
            </VideoListContainerInnerWrapper>
          </VideoListContainer>
        </section>
      </main>
    </div>
  );
};

export default ChannelDetailPage;
