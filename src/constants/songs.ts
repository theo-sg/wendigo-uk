import SongCoverCologne from '../assets/coverimage/cologne.jpg'
import SongCoverKrakensbane from '../assets/coverimage/krakensbane.jpg'
import SongCoverXXII from '../assets/coverimage/xxii.jpg'
import { EXTERNAL_LINKS } from './links'

export type SongSlug = 'xxii' | 'cologne' | 'krakensbane'

type SongVideo = {
  src: string
  title: string
}

export type SongPageData = {
  slug: SongSlug
  title: string
  themeClassName: string
  cover: string
  spotifyEmbed: string
  youtubeEmbeds: SongVideo[]
  bandcampEmbed: string
  bandcampUrl: string
  lyrics: string
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
}

export const HOME_SONG_ORDER: SongSlug[] = ['xxii', 'cologne', 'krakensbane']
