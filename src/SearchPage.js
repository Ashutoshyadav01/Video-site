import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

const SearchPage = () => {
  return (
    <div className='searchPage'>
        <div className='searchPage-filter'>
      <TuneIcon/>
      <h2>FILTER</h2>
      </div>
      <hr/>
      <ChannelRow
  image="https://via.placeholder.com/150" // URL to a placeholder image
  Channel="Sample Channel" // Channel name
  verified={true} // Verification status (true or false)
  subs="1.2M" // Number of subscribers
  noOfVideos={120} // Number of videos
  description="This is a sample description for the channel." // Channel description
/>
<hr/>
<VideoRow
      image="https://picsum.photos/200/300?random=1"
      title="Amazing Adventure Time Episode"
      channel="Cartoon Network"
      views="1.2M views"
      subs="500K subscribers"
      timestamp="2 days ago"
      description="An amazing episode of Adventure Time that you can't miss."
    />
    <VideoRow
      image="https://picsum.photos/200/300?random=2"
      title="SpongeBob SquarePants Best Moments"
      channel="Nickelodeon"
      views="800K views"
      subs="300K subscribers"
      timestamp="1 week ago"
      description="A compilation of the best moments from SpongeBob SquarePants."
    />
    <VideoRow
      image="https://picsum.photos/200/300?random=3"
      title="The Simpsons Funniest Scenes"
      channel="FOX"
      views="1.5M views"
      subs="700K subscribers"
      timestamp="3 days ago"
      description="The funniest scenes from The Simpsons."
    />
    <VideoRow
      image="https://picsum.photos/200/300?random=4"
      title="Rick and Morty Best Episodes"
      channel="Adult Swim"
      views="2.1M views"
      subs="900K subscribers"
      timestamp="5 days ago"
      description="A collection of the best Rick and Morty episodes."
    />
    <VideoRow
      image="https://picsum.photos/200/300?random=5"
      title="Tom and Jerry Classics"
      channel="Warner Bros"
      views="3.2M views"
      subs="1M subscribers"
      timestamp="1 month ago"
      description="Classic episodes of Tom and Jerry."
    />
    <VideoRow
      image="https://picsum.photos/200/300?random=6"
      title="Family Guy Funniest Moments"
      channel="FOX"
      views="1.8M views"
      subs="750K subscribers"
      timestamp="2 weeks ago"
      description="The funniest moments from Family Guy."
    />
    <VideoRow
      image="https://picsum.photos/200/300?random=7"
      title="Best of Futurama"
      channel="Comedy Central"
      views="1.1M views"
      subs="600K subscribers"
      timestamp="3 days ago"
      description="Best episodes and moments from Futurama."
    />
    <VideoRow
      image="https://picsum.photos/200/300?random=8"
      title="Avatar: The Last Airbender Highlights"
      channel="Nickelodeon"
      views="2.5M views"
      subs="900K subscribers"
      timestamp="4 days ago"
      description="Highlights from Avatar: The Last Airbender."
    />
    <VideoRow
      image="https://picsum.photos/200/300?random=9"
      title="Looney Tunes Best Episodes"
      channel="Warner Bros"
      views="2M views"
      subs="850K subscribers"
      timestamp="6 days ago"
      description="The best episodes of Looney Tunes."
    />
    <VideoRow
      image="https://picsum.photos/200/300?random=10"
      title="Gravity Falls Mysteries"
      channel="Disney"
      views="1.4M views"
      subs="650K subscribers"
      timestamp="1 week ago"
      description="Exploring the mysteries of Gravity Falls."
    />
    </div>
  )
}

export default SearchPage
