import SongCoverCologne from '../assets/coverimage/cologne.jpg'
import SongCoverKrakensbane from '../assets/coverimage/krakensbane.jpg'
import SongCoverTower from '../assets/coverimage/tower.jpg'
import SongCoverXXII from '../assets/coverimage/xxii.jpg'
import { EXTERNAL_LINKS } from './links'

export type SongSlug = 'xxii' | 'cologne' | 'krakensbane' | 'tower' | 'crescent-moon' | 'all-seeing-eye'

type SongVideo = {
  src: string
  title: string
}

export type SongPageData = {
  slug: SongSlug
  title: string
  themeClassName: string
  cover: string
  spotifyEmbed?: string
  youtubeEmbeds?: SongVideo[]
  bandcampEmbed?: string
  bandcampUrl?: string
  lyrics?: string
  hidden?: boolean
}

export const SONGS: Record<SongSlug, SongPageData> = {
  xxii: {
    slug: 'xxii',
    title: 'xxii',
    themeClassName: 'song-page-xxii',
    cover: SongCoverXXII,
    spotifyEmbed: EXTERNAL_LINKS.tracks.xxii.spotifyEmbed,
    youtubeEmbeds: [{ src: EXTERNAL_LINKS.tracks.xxii.youtubeEmbed, title: 'XXII official video' }],
    bandcampEmbed: EXTERNAL_LINKS.tracks.xxii.bandcampEmbed,
    bandcampUrl: EXTERNAL_LINKS.tracks.xxii.bandcamp,
    lyrics: `the first time I understood it
bated breath and curses under blackened trees, baby please
yeah

oh oh, oh oh
i'm sick, i'm sick, i'm sick

just a pat on my back then
'good job, great work, a man now' whatever that means
is nothing sacred anymore?
it was worth it, right? right?
learn to hate it like a father hates his son
golden boy who can do no wrong`,
  },

  cologne: {
    slug: 'cologne',
    title: 'cologne',
    themeClassName: 'song-page-cologne',
    cover: SongCoverCologne,
    spotifyEmbed: EXTERNAL_LINKS.tracks.cologne.spotifyEmbed,
    youtubeEmbeds: [{ src: EXTERNAL_LINKS.tracks.cologne.youtubeEmbed, title: 'Cologne video' }],
    bandcampEmbed: EXTERNAL_LINKS.tracks.cologne.bandcampEmbed,
    bandcampUrl: EXTERNAL_LINKS.tracks.cologne.bandcamp,
    lyrics: `i stood aside
i stood like summer before fall
and it fucked me up
it fucked me up to make that call
op den fiets man, in defeat
we run away to smoke a slice of guilt
the drive to self destruct
crash out and burn all of the bridges that we built

so why'd you throw dirt on my name?

look in my eyes
tell another white lie
'cause each word, yeah each line
carved in the back of my mind
i don't wanna do it alone
yeah
we won't make it out of cologne

white shirt, sweet scent
you turn some heads now, don't you boy?
sweet nineteen
so why's there still this sorrow in my joy?

and why'd you throw dirt on my name?

look in my eyes
tell another white lie
'cause each word, yeah each line
carved in the back of my mind
i don't wanna do it alone
yeah
we won't make it out of cologne

you procure the knife
so damn gently
and then blame me just for flinching
if you wanted to come, then why'd you throw dirt on my name?

look in my eyes
tell another white lie
'cause each word, yeah each line
carved in the back of my mind
i don't wanna do it alone
yeah
we won't make it out of cologne`,
  },

  krakensbane: {
    slug: 'krakensbane',
    title: 'krakensbane',
    themeClassName: 'song-page-krakensbane',
    cover: SongCoverKrakensbane,
    spotifyEmbed: EXTERNAL_LINKS.tracks.krakensbane.spotifyEmbed,
    youtubeEmbeds: [
      { src: EXTERNAL_LINKS.tracks.krakensbane.youtubeEmbed, title: 'Krakensbane video' },
      { src: EXTERNAL_LINKS.tracks.krakensbane.youtubeLiveEmbed, title: 'Krakensbane live video' },
    ],
    bandcampEmbed: EXTERNAL_LINKS.tracks.krakensbane.bandcampEmbed,
    bandcampUrl: EXTERNAL_LINKS.tracks.krakensbane.bandcamp,
    lyrics: `something in me woke the night they took me in
blue lights eight pale arms the needles in my skin
whisper in my ear, 'my love, have you forgot?
there's nothing left for you but ten more weeks of rot'

rub salt in my wounds, i'll learn to love the sting
begging, baby, please, but i can't hear a thing
the oceans in my eyes are boiling red with rage
they're boiling red

i'll cut you loose
now you're sinking
so fuck what you're thinking, yeah
when you're staring at the bottom of the sea

and the birds don't sing the way they did before
and your faces have all changed
been a while since i last saw
puts its poison in my thoughts between the cracks
and there ain't no land ahead
and the waves are turning black

i'll cut you loose
now you're sinking
so fuck what you're thinking, yeah
when you're staring at the bottom of the sea
and i'll cut you loose
now you're sinking
so fuck what you're thinking, yeah
when you're staring at the bottom of the sea

please don't try to make amends
tentacles instead of veins in my throat
please don't try to rescue me
cling to hatred like it's keeping me afloat

and i'll cut you loose
now you're sinking
so fuck what you're thinking, yeah
when you're staring at the bottom of the sea
and i'll cut you loose
now you're sinking
so fuck what you're thinking, yeah
when you're staring at the bottom`,
  },

  tower: {
    slug: 'tower',
    title: 'tower',
    themeClassName: 'song-page-tower',
    cover: SongCoverTower,
    spotifyEmbed: EXTERNAL_LINKS.tracks.tower.spotifyEmbed,
    youtubeEmbeds: [
      { src: EXTERNAL_LINKS.tracks.tower.youtubeEmbed, title: 'Tower' },
    ],
    bandcampEmbed: EXTERNAL_LINKS.tracks.tower.bandcampEmbed,
    bandcampUrl: EXTERNAL_LINKS.tracks.tower.bandcamp,
    lyrics: `my baby’s from the forest
she’s a flower in the snow
antarctic bloom with her petals and thorns

she’s lunar in her spirit
and you should see the way she walks 
towards me orbiting
i pull her in close

she stares straight up into the sky
and laughs with liquid gold
she’s silvered in her gaze 
and sidereal in her soul

but i am rust i am decay
and i will tarnish all that’s true
self sabotage runs in my iron blood
i’ll drain it all for you

i’m deaf dumb
baby i’m blind
i keep telling her to
run for the hills
with her black hair
blue eyes
i’m still telling her to
run for the hills

run for the hills

suddenly it struck me like a hammer to the head
that if this is what living is like then i must have been dead
i am a corpse under the mud
been buried here the whole damn time
but i would go right back below
just to feel her lips on mine

i’m deaf dumb
baby i’m blind
i keep telling her to
run for the hills

her black hair
blue eyes
i’m still telling her to
run for the hills

why's it gotta be the sixteenth card?
why's it gotta be the sixteenth card?
why's it gotta be the sixteenth card?
why's it gotta be the sixteenth card?
why's it gotta be the sixteenth card?
why's it gotta be the sixteenth card?
why's it gotta be the sixteenth card?
why's it gotta be the sixteenth card?`,
  },

  'crescent-moon': {
    slug: 'crescent-moon',
    title: 'crescent moon',
    themeClassName: 'song-page-crescent-moon',
    cover: SongCoverTower,
    hidden: true,
  },
  'all-seeing-eye': {
    slug: 'all-seeing-eye',
    title: 'all seeing eye',
    themeClassName: 'song-page-all-seeing-eye',
    cover: SongCoverTower,
    hidden: true,
  },
}

export const HOME_SONG_ORDER: SongSlug[] = ['tower', 'xxii', 'cologne', 'krakensbane']
export const HIDDEN_SONG_ORDER: SongSlug[] = ['crescent-moon', 'all-seeing-eye']

export function getSongBySlug(slug: string): SongPageData | undefined {
  if (!slug) {
    return undefined
  }

  const directMatch = SONGS[slug as SongSlug]
  if (directMatch) {
    return directMatch
  }

  return {
    slug: slug as SongSlug,
    title: slug.replace(/-/g, ' '),
    themeClassName: 'song-page-xxii',
    cover: SongCoverXXII,
    hidden: true,
  }
}
