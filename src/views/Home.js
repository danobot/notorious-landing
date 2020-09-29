import React from 'react';
// import sections
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import MyHero from '../components/sections/MyHero';
import CenterImage from '../components/sections/CenterImage';
import Tile from './../components/sections/Tile';
import Image from '../components/elements/Image';
import SplitItem from '../components/sections/SplitItem';

import { faSitemap, faSave, 
    faWifi,
    faSearch,
    faTag,
    faSyncAlt,
    faCloudDownloadAlt as faDownload,
    faTrashAlt,
    faFile,
    faTrashRestoreAlt,
    faServer,
    faSmile,
    faBoxOpen
} from '@fortawesome/free-solid-svg-icons';

import { faMarkdown,

} from '@fortawesome/free-brands-svg-icons';
import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      <MyHero className="illustration-section-01" />,
      <FeaturesTiles tiles={
        [
            <Tile title="Hierarchical Note Taking" body="Nesting of notebooks allows you to better organise your ideas." icon={faSitemap} />,
            <Tile title="Auto Save" body="Ctrl-S is old school. Notorious saves for you automatically so you can focus on the content." icon={faSave} />,
            <Tile title="Offline First" body="All your notes are stored locally remain fully searchable and editable and is synced when you are back online." icon={faWifi} />,
            <Tile title="Full Text Search" body="Everything is searchable. Titles, content, tags and attachments." icon={faSearch} />,
            <Tile title="Tagging" body="Tagging notes from different notebooks serves as another powerful organisation mechanism." icon={faTag} />,
            <Tile title="Markdown to the core" body="From the get go we created an effective editor for getting ideas out and on paper as quickly as possible." icon={faMarkdown} />,
            
          ]} 
        sectionHeader={ {
          title: 'Never lose a thought.',
          paragraph: 'Offline-first note taking and knowledge management application for desktop and the web. Supports nested notebooks, tags, real-time sync, images and file attachments. Optimised for efficiency with keyboard navigation, full-text search and version control. Never lose a thought. Private, fast, notorious 😈'
        }}
        />

      <CenterImage tagline="Global Search" title={<p>Answers only a keyword away</p>} body="Find what you are looking for when you cannot remember where you saved it. With global search and tagging you can find anything based on keywords." className="illustration-section-02" image={require("./../assets/gifs/global-search.gif")} />
      <FeaturesTiles tiles={[
        <Tile title="Instant Sync" body="Access your ideas from any device. Instant sync makes sure you have the latest version on you at all times." icon={faSyncAlt} />,
        <Tile title="Notebooks are just notes" body="Mind blown? Notebooks are simply notes with subnotes. Any note can be promoted and demoted or pinned to the side menu for quick access." icon={faFile} />,
        <Tile title="Trash Can" body="Yes, it's a feature. No more accidental deletes - restore deleted notes with ease." icon={faTrashAlt} />,
        <Tile title="Automatic Updates" body="We will download updates in the background and apply them when you close the app. The most transparent update experience ever™" icon={faDownload} />,
        <Tile title="Built in Backups" body="Notorious saves as you type and replicates changes back to your server." icon={faTrashRestoreAlt} />,
        <Tile title="Self Hosted Backend" body="Own your data and keep it private." icon={faServer} />,
        <Tile title="Open Source Project" body="Built by the community. Free forever - and not in the social media kind of way..." icon={faBoxOpen} />,
        <Tile title="GPL-v3" body="Open License. Be nice, contribute, enjoy." icon={faSmile} />,
      ]}
        sectionHeader={ {
          title: 'More features',
          paragraph: ''
        }}
      />
      <CenterImage tagline="Get organised" title={<p>Notebooks done right</p>} body="Notorious notebooks can be nested and rearranged as you see fit, giving you a birds-eye or down-in-the-deets view of your notes when you need it." className="illustration-section-02" image={require("./../assets/gifs/new-note-hierarchy.gif")} />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-03" splits={[
        <SplitItem 
        title= "Notebook search" 
        tagline="Edit with ease" 
        body="You can easily search within an open notebook and favourite notes for fast access later." 
        image={<Image
          src={require('./../assets/gifs/search-and-favourite.gif')}
          alt="Markdown Editor"
          width={528}
          height={396} />}
        />,
        <SplitItem 
        title= "Advanced Markdown Editor" 
        tagline="Edit with ease" 
        body="Notorious uses the best markdown editor on the market enhanced with HyperMD to provide inline Markdown previews." 
        image={<Image
          src={require('./../assets/img/md_boilerplate.png')}
          alt="Markdown Editor"
          width={528}
          height={396} />}
        />,
        <SplitItem 
          title= "Various Note Types" 
          tagline="Special Use Cases" 
          body="Create Index Pages, Todo lists, Sticky Boards and more using the different note types available in Notorious." 
          image={<Image
            src={require('./../assets/img/context_menu.png')}
            alt="Features split 01"
            width={528}
            height={396} />}
        />
        
      ]} />
      <Cta title="We are looking for contributors" body={<p className="text-sm mb-0">If you would like to contribute check out the <a href="https://github.com/danobot/notorious/issues">development setup guide</a> to get started and <a href="https://github.com/danobot/notorious/issues">Github issues page</a>. </p>} /> 
    </>
  );
}

export default Home;