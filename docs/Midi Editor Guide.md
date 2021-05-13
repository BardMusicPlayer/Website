# Manual For Bard Music Player
_Helping bards since 2017_

## Editing Midis
FFXIV has a set of limitations when performing. This means that any midi you may load in the game will not sound exactly as it should. Editing is a process through which you can express yourself and adjust a song to your liking, and at the same time optimize it for in-game play. Giving each song your own flavor is part of the true craft of being a performer. Otherwise, you’re just playing the exact same songs like hundreds of other bards!

## Starting Up
You will first need a program to edit the Midi files. MidiEditor and MuseScore are some free, beginner-friendly options. Any program that can produce .mid can work, such as Sibelius, Cubase, FLStudio...

For complete beginners, a midi has notes on different tracks. You can think of them as each one being a "hand", like when playing the piano. Each track has a channel associated, which adds extra info like the instrument soundfont. Channels are ignored by BMP, so let’s focus on tracks.

**First of all, will you edit for a solo piece, or an ensemble piece?** As a solo bard, you’ll have to limit yourself to a single track. It can have any notes as long as they fit FFXIV limitations.

Playing in an ensemble (two or more bards) lets you be more flexible. For example, for a piano piece, each bard can represent one hand and sound less cluttered than a single bard. Some advantages of an orchestra are higher octave range, higher note count per 50ms, wider range of instruments and true chords. This makes editing much easier.

Once you have decided, it's time to know what you will have to edit.

## The Three Main Editing Concepts
**Octave Range**
Anything out of the in-game’s three octave range (C3-C6, 12 semitones per octave) will not be played. There are several options to deal with this.

- You can ignore those notes.
- If a section of the track is really high/low but the rest is at a consistent octave range, you can move that whole section up/down selecting it and transposing it by 12 semitones (Ctrl+T in MidiEditor). Example.
- If only a few notes are out of range (let’s assume over C6), you have to decide. Lower just those notes one octave down (-12). If the change it’s too notorious, you may want to lower the nearby notes as well. Does it still sound good? No? Put them back and try bringing the entire track one octave down (-12). How does it play? Are there now notes out of the lowest octave (C3)? You will have to keep adjusting.
- If you’re editing for an orchestra, know that each in-game instrument has its own octave range: a C3 on a piano will sound higher pitched than a C3 on a lute. This means that you can cover a wider range of octaves by playing different instruments. For example, on a simple piano piece there’s usually a higher section and a lower section: those can be played by a piano and a lute, respectively. You’ll have to bring up the lute section to C3-C6, but in-game it will still sound lower pitched than a piano. Example.
**For a guide about instrument octaves, see the addendum at the end of this guide.**

As you can see, there are lots of options to fiddle with. This comes down to preference and the own editor skill, so you’ll be getting the hang of it.

**Chords**
Chords are notes played at the same time. FFXIV doesn’t allow this, so one trick is to create an arpeggio with them. This is done by playing each note closely to each other in a stair-like fashion, so it “sounds” like a chord. As of 1.23, BMP takes care of this at the fastest interval possible (50ms). However, a high number of consecutive chords can overload the song and make it sound sloppy.

As a single bard, you can adjust your arpeggios manually or, if you need to reduce the note clutter, delete notes. This varies depending on the type of chord, but usually you can delete the second note and, if needed, the third. Try and test to see which one sounds better for you.

As an orchestra, the way to go is usually assigning each note of a chord to a bard. If it isn’t possible, two bards can deal with 3-note and even 4-note chords just fine.

**Tracks**
Tracks contain notes. Track 0 is a special track which tends to contain meta events, like the playback speed, and thus is suggested to not put any notes in there. However, for simple midi usage it's alright to do so, since there's virtually no difference between BMP playing track 0 and track 1.

Each bard can play up to one track at the same time, so if you’re soloing you may pick the one with the main melody, which is the most recognizable part of the song, and then add notes from other tracks to it to fill the gaps.

As an orchestra you get more leeway on how to assign tracks, and it usually comes down to narrowing each bard to a track. This includes taking notes from an already existing track and creating another with them, for example to deal with chords.

## Addendums
**Instrument Octaves**
The lower the starting octave, the lower pitched it will sound.

| Strums | Winds | Brass | Strings | Percussion |
| ----- | ----- | ----- | ----- | ----- |
| Piano: C4-C7 | Fife: C5-C8 | Trumpet C3-C6 | Violin C3-C6 | Timpani: C2-C5 |
| Harp: C3-C6 | Flute: C4-C7 | Saxophone: C3-C6 | Viola: C3-C6 |
| Fiddle: C2-C5 | Oboe: C4-C7 | Trombone: C2-C5 | Cello: C2-C5 |
| Lute: C2-C5 | Panpipes C4-C7 | Horn: C2-C5 | Double Bass: C1-C4 |
| | Clarinet: C3-C6 | Tuba: C1-C4 |

**Extra Limitations**
The maximum note speed is approximately 14 notes a second (50ms between each) if the game is running at a locked 60fps. Higher fps does not change anything. Lower fps will cause misses and/or reduce the playback speed.

*Bard Music Player (c) paru 2018 - 2021, (c) MoogleTroupe 2021*
