"use client"
import React, { useState } from 'react';

const LogPage = () => {
  const [sortOrder, setSortOrder] = useState('descending');

  const handleSortButtonClick = () => {
    setSortOrder(sortOrder === 'ascending' ? 'descending' : 'ascending');
  };
  const arrow = sortOrder === 'ascending' ?  '↓' : '↑';

  const logs = [
    {
      id: 3,
      date: '26/04/2018',
      media: '高校生新聞 Koukousei Shimbun',
      title: 'スラムにせっけん届けたい 東工大付属高校の３人がプロジェクト',
      link: 'https://www.koukouseishinbun.jp/articles/-/3833'
    },
    {
      id: 7,
      date: '20/06/2019',
      media: 'niconico news',
      title: '夏休みはプログラミングを学ぼう!中高生のためのプログラミングキャンプ『Gs ACADEMY YOUTH CAMP』東京・表参道で開講',
      link: 'https://news.nicovideo.jp/watch/nw5518244'
    },
    {
      id: 5,
      date: '20/10/2018',
      media: 'Rikejo リケジョ 講談社',
      title: '【連続公開】4ヵ月でアプリを作成した女子高生チーム登場!「女子にプログラミングを広めるために 」イベントレポート（前編）',
      link: 'https://www.rikejo.jp/article/23617'
    },
    {
      id: 6,
      date: '21/10/2018',
      media: 'Rikujyo リケジョ 講談社',
      title: '【連続公開】4ヵ月でアプリを作成した女子高生チーム登場!「女子にプログラミングを広めるために 」イベントレポート（後編）',
      link: 'https://www.rikejo.jp/article/23633'
    },
    {
      id: 8,
      date: '20/08/2019',
      media: 'Impress Watch 子供とIT',
      title: 'テクノロジーで女性が活躍する社会を目指し、世界に挑む日本のテック系女子中高生たち',
      link: 'https://www.watch.impress.co.jp/kodomo_it/news/1201834.html'
    },
    {
      id: 2,
      date: '26/12/2017',
      media: '校外プログラム大全',
      title: '【体験談寄稿】ニューヨーク科学アカデミー主催の高校生対象の教育プログラム『The Junior Academy』とは?!',
      link: 'https://kininarukotomatome.com/tja-remi/'
    },
    {
      id: 1,
      date: '06/11/2017',
      media: 'Global Edu',
      title: '中高生レポート⑨ | The New York Academy of Sciences主催STEMプログラム「The Junior Academy」',
      link: 'https://globaledu.jp/nyas-tja/'
    },
    {
      id: 4,
      date: '19/09/2018',
      media: 'Global Edu',
      title: '中高生レポート㉑ | Technovation Challenge 2018',
      link: 'https://globaledu.jp/technovationchallenge2018/'
    },
    {
      id: 9,
      date: '22/01/2024',
      media: 'Spotify Podcast - Bias / バイアス',
      title: 'スウェーデン留学から現地就職!?/H&M本社で働いて分かった”北欧流の働き方”【Remi前編】',
      link: 'https://open.spotify.com/episode/1xbQhe5qok8Wmnm7LjL7e4'
    },
    {
      id: 12,
      date: '29/01/2024',
      media: 'Spotify Podcast - Bias / バイアス',
      title: '多国籍と女性のボスは当たり前/大学院まで無料!スウェーデンの新卒キャリア事情【Remi後編】】',
      link: 'https://open.spotify.com/episode/1xbQhe5qok8Wmnm7LjL7e4'
    },
    {
      id: 13,
      date: '15/02/2024',
      media: 'Portfolio',
      title: 'Updated Portfolio site + photo page, and log page',
      link: 'https://www.remihiguchi.com/'
    },
    {
      id: 10,
      media: 'Deruqui Community',
      date: '10/01/2020',
      title: 'Deruqui Interview 「樋口れみー平等な世の中に近づけたい」',
      link: 'https://community.deruqui.com/students/remi_higuchi',
    },
    {
      id: 11,
      media: 'Embassy of Sweden',
      date: '08/11/2021',
      title: 'スウェーデン大使館×ヨンショーピング大学×ウプサラ大学×王立工科大学 オンライン留学説明会',
      link: 'https://www.swedenabroad.se/ja/embassies/japan-tokyo/current/calendar/%E3%82%B9%E3%82%A6%E3%82%A7%E3%83%BC%E3%83%87%E3%83%B3%E7%95%99%E5%AD%A6%E8%AA%AC%E6%98%8E%E4%BC%9A/',
    },
    
  ];

  return (
    <main className='p-4'>
      <div className="flex items-end gap-2">
        <h1 className="text-3xl">LOG</h1>
        <button onClick={handleSortButtonClick} className='underline underline-offset-4'>{arrow} Latest</button>
      </div>
      <div className=''>
        {
          logs
            .sort((a, b) => sortOrder === 'ascending' ? a.id - b.id : b.id - a.id)
            .map((log) => (
              <div key={log.id}>
                <p>---</p>
                <div className="flex flex-wrap gap-1 items-baseline">
                  <span className='font-mono font-thin text-sm'>{log.date}</span>
                  <span className=''>&quot;{log.title}&quot;</span>
                  <span className=''>- {log.media}. Available on</span>
                  <a href={log.link} target="_blank" className="break-all text-blue-900 underline hover:bg-indigo-950 hover:text-white">{log.link}</a>
                </div>
              </div>
            ))}
      </div>
    </main>
  );
};

export default LogPage;
