import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Podcasts',
}

export default function Page() {
  return (
    <div className="prose dark:prose-invert font-serif">
      <h1 className="font-serif text-4xl">Podcasts</h1>
      <p className="text-lg">Here are podcasts I recommend checking out. Some publish regularly, others are short, one-off series.</p>
      <ul>
        <li><a href="https://www.smartless.com">Smartless</a></li>
        <li><a href="https://allconsuming.show">All Consuming</a></li>
        <li><a href="https://www.exitscam.show">Exit Scam</a></li>
        <li><a href="https://www.thisamericanlife.org/podcast">This American Life</a></li>
        <li><a href="https://tim.blog/podcast/">The Tim Ferriss Show</a></li>
        <li><a href="https://99percentinvisible.org/">99% Invisible</a></li>
        <li><a href="https://www.stitcher.com/podcast/stitcher/the-dream">The Dream</a></li>
        <li><a href="https://gimletmedia.com/every-little-thing/">Every Little Thing</a></li>
        <li><a href="http://freakonomics.com/">Freakonomics</a></li>
        <li><a href="https://gimletmedia.com/heavyweight/">Heavyweight</a></li>
        <li><a href="https://www.npr.org/podcasts/510313/how-i-built-this">How I Built This</a></li>
        <li><a href="https://labeledpodcast.com/">Labeled</a></li>
        <li><a href="https://www.outsideonline.com/podcasts">Outside</a></li>
        <li><a href="https://gimletmedia.com/reply-all/">Reply All</a></li>
        <li><a href="https://www.gimletmedia.com/sandra">Sandra</a></li>
        <li><a href="https://serialpodcast.org">Serial</a></li>
        <li><a href="https://stownpodcast.org">S-Town</a></li>
        <li><a href="https://gimletmedia.com/startup/">StartUp</a></li>
        <li><a href="https://www.gimletmedia.com/without-fail">Without Fail</a></li>
        <li><a href="https://www.earhustlesq.com/">Ear Hustle</a></li>
        <li><a href="http://outsideinradio.org/">Outside/In</a></li>
        <li><a href="https://www.gimletmedia.com/the-habitat">The Habitat</a></li>
        <li><a href="https://soundcloud.com/containersfmg">Containers</a></li>
        <li><a href="https://www.topic.com/runningfromcops">Running from COPS</a></li>
        <li><a href="https://www.topic.com/surviving-y2k">Surviving Y2K</a></li>
        <li><a href="https://www.heavensgate.show">Heaven&apos;s Gate</a></li>
        <li><a href="https://the-big-one.scpr.org">The Big One</a></li>
        <li><a href="https://www.npr.org/podcasts/606441988/bundyville">Bundyville</a></li>
        <li><a href="https://twoupproductions.com/limetown/podcast">Limetown</a></li>
        <li><a href="https://www.stitcher.com/podcast/pineapple-street-media/the-chernobyl-podcast">The Chernobyl Podcast</a></li>
        <li><a href="https://sivers.org/podcast">Derek Sivers</a></li>
        <li><a href="https://www.earwolf.com/show/factually-with-adam-conover/">Factually!</a></li>
        <li><a href="https://www.dankochwords.com/yhp.html">You Have Permission</a></li>
        <li><a href="https://darknetdiaries.com">Darknet Diaries</a></li>
      </ul>
    </div>
  )
}

