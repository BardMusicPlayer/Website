---
id: mognotate-drum-mapper
title: MogNotate Drum Mapper
sidebar_label: MogNotate Drum Mapper
---


## What is drum mapping?

Square Enix made the odd decision to give bards drum instruments... and then make them pitched across three octaves like the "normal" instruments. While snare drums, bass drums, and cymbals can all be tuned or adjusted in real life to produce the specific sound you want, they are all considered "unpitched" instruments. This means you don't play a C note on a drum like you do on a piano. 

In midi, due to the unpitched nature of these percussion instruments, they were given an entire channel of their own, where the notes are not arranged in a pitched fashion like the other instruments, but instead in an orderly fashion as shown below. Essentially, when you play note 36 (a C, normally), you get a bass drum, but play note 37 (a D, normally) and you get a snare drum. 

[Insert picture of midi percussion channel]

This is convenient for writing music to be played in midi... but less convenient if you are trying to write music for Final Fantasy XIV. 

The good news, though, is that MogNotate will handle all of that for you! Once a you have properly formatted the drum section in your .yaml file, MogNotate will map the layout of the midi percussion channel to the right in-game notes on the right instruments. For a simple example, let's look at the following .yaml file:

```yaml
songs:
- title: Undertale - Home
  description: 'Bards: 4 Singers: 0'
  file: Undertale - Home.mid
  standard:
  - tracks:
      0:
    instrument: Harp
    octave: 3
    bards: 1
  - tracks:
      1:
    instrument: Lute
    octave: 2
    bards: 1
  drum:
  - tracks: 
      2:
    snare_drum_bards: 1
    bass_drum_bards: 1
  lyric: []
```

In this file, we have added a snare drum and bass drum player and specified track 2 as the percussion track. Now any bass drum or snare drum notes on track 2 will be properly played by our bards. Yes, it really is that simple. You can add parts with ```snare_drum_bards:```, ```bass_drum_bards:```, ```cymbal_bards:``` and ```bongo_bards:```. 

The drum mapper also supports mapping parts to the timpani with ```timpani_bards:```, although no timpani notes are assigned by default. Parts for the timpani, being a pitched instrument, will USUALLY be handled in the standard instrument section, rather than the drum mapper, but if you wish to map a percussion channel note to the timpani, the option exists. See the "drum mapper customization" section below. 

## Default percussion map

You may be wondering what notes in particular MogNotate will map by default. Here is the list:

| Midi note number | Description        | In-game instrument | In-game note |
| :---             | :---               | :---               | :---         |
| 35               | Acoustic Bass Drum | BassDrum           | 8            |
| 36               | Electric Bass Drum | BassDrum           | 10           |
| 38               | Acoustic Snare     | SnareDrum          | 20           |
| 40               | Electric Snare     | SnareDrum          | 22           |
| 41               | Low Floor Tom      | BassDrum           | 16           |
| 43               | High Floor Tom     | BassDrum           | 19           |
| 45               | Low Tom            | BassDrum           | 23           |
| 47               | Low-Mid Tom        | BassDrum           | 26           |
| 48               | Hi-Mid Tom         | BassDrum           | 30           |
| 49               | Crash Cymbal 1     | Cymbal             | 24           |
| 50               | High Tom           | BassDrum           | 33           |
| 52               | Chinese Cymbal     | Cymbal             | 22           |
| 55               | Splash Cymbal      | Cymbal             | 30           |
| 57               | Crash Cymbal 2     | Cymbal             | 24           |
| 60               | High Bongo         | Bongo              | 23           |
| 61               | Low Bongo          | Bongo              | 20           |

Any notes not on this list will be completely ignored by default. However, if you wish to add notes that are missing from this list, or change the in-game note that is played, you can customize a song's drum mapping to whatever you desire. 

## Drum mapper customization

If you want to change anything about the drum mapping, you can do so by specifying what instrument and note a particular percussion channel note will be assigned to. 

For example, let's say we want a slightly deeper bass drum (percussion channel note 35) than normal for our song. We can rewrite the default bass drum part like this: 

```yaml
  drum:
  - tracks: 
      2:
    snare_drum_bards: 1
    bass_drum_bards: 1
    map_35_drum: BassDrum
    map_35_note: 6
```

Now the bass drum will be slightly lower than the default, playing note 6 rather than the usual note 8. 

You can assign any midi percussion note from ```map_35_drum:``` to ```map_61_drum:``` this way, including every note that isn't in the default drum map, giving it a bass drum, snare drum, cymbal, bongo, or timpani note from 1 to 37. 

Additionally, if you want to completely un-map a default drum selection, you can do that, too. For our last example, let's say we're not a fan of how using the in-game bass drum like a tom drum sounds. In this case, we can un-map the top drum notes from the drum map by assigning those notes to the instrument ```None```.

```yaml
  drum:
  - tracks: 
      4:
    snare_drum_bards: 1
    bass_drum_bards: 1
    map_41_drum: None
    map_43_drum: None
    map_45_drum: None
    map_47_drum: None
    map_48_drum: None
    map_50_drum: None
```

After doing this, the notes 41, 43, 45, 47, 48 and 50 will be un-mapped and ignored. 
