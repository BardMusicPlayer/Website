---
id: mognotate
title: MogNotate
sidebar_label: MogNotate
---


## MogNotate는 무엇인가요?

MogNotate는 midi 파일이 게임 속에서 어떻게 연주될지 미리 듣기를 제공하는 프로그램입니다. 또한 midi 파일을 MogAmp(지휘자 프로그램)에서 사용하는 mmsong 확장자로 변환하는 핵심 단계들을 수행하는 프로그램입니다.

일반적으로, 청중 앞에서 연주하기 전, 이 곡의 실제 소리가 어떨지 미리 듣기 위해 사용하게 될 것입니다. 이는 당신이 어떤 악기가 더 어울리는지 고르는 데 도움이 되고, 발견하지 못했던 실수를 찾아내는데도 매우 도움이 될 것입니다. MogNotate는 화음으로 이루어진 하나의 미디 트랙을 같은 악기를 든 여러 명의 음유시인이 나눠 연주하도록 분배하는 기능 등, 곡 작업을 간소화하는 여러 도움을 주기도 합니다.

## MogNotate로 곡 불러오기

MogNotate에서 곡을 불러오는데는 2가지 방법이 있습니다. 첫 번째 방법은 BMP에서 호환되는 midi 파일을 불러오는 것이고, 두 번째 방법은 .yaml 파일을 새로 작성하거나 편집하여 불러오는 방법입니다.

![img](/img/MogNotateScreenshot.png)

당신이 이미 BMP를 위해서 midi 파일을 만들어서 사용하고 계셨다면, 당신의 곡들은 이미 연주할 준비가 거의 된 상태입니다. 그냥 "Import BMP Midi" 버튼을 누르고 그 midi 파일을 선택해서 불러와주세요. 이렇게 midi 파일을 불러오면 자동적으로 .yaml 확장자 파일이 생성됩니다. BMP 포맷은 매우 간단하며, 보통 미디 트랙의 이름만 바꾸는 기능을 합니다. 만약 MogNotate가 만든 yaml 파일을 사용해 곡 수정 작업을 하고 싶다면, 이는 매우 좋은 시작점이 됩니다.

.yaml 파일 작성은 직접적으로 여러 추가 기능을 제공합니다. 타악기 트랙을 짜고, 한 트랙을 여러 악기로 분배하고, 곡에 가사(채팅 출력) 기능을 넣을 수 있습니다. 이 yaml 확장자 파일은 현재 MogNotate에서 바로 다룰 수 있도록 도구를 개발 중에 있지만, 지금도 메모장이나 워드패드 등의 텍스트 프로그램에서도 열 수 있습니다. yaml 파일을 작성하셨다면 "Load MogNotate Yaml" 버튼으로 불러올 수 있습니다.

현재 불러온 yaml 파일을 수정했다면, "Reload Current MogNotate Yaml" 버튼을 눌러서 MogNotate 상에서 변화를 확인해 볼 수 있습니다.

두 가지의 불러오기는 모두 mmsong 확장자 파일을 생성합니다. 이 확장자는 음악 데이터는 물론, 악기 정보와 가사 텍스트 등을 모두 담고 있는 MogApp만의 고유 확장자입니다. 이 mmsong 파일이 바로 최종적으로 합주할 때 MogAmp에서 불러와야 하는 파일입니다. 완료해둔 작업들을 둘러보고 싶다면, MogNotate의 "Load MMSong" 버튼으로 불러와서 단순 미리 듣기 감상도 가능합니다. 

## About BMP Format

Bard Music Player, a separate barding program, set the standard of track names being used to denote what instrument a track would be played with, and in what octave. Much of the bard community was already used to formatting their .mid files like this and had extensive libraries in this format, so having a way for MogNotate to import in a .mid file formatted this way saved a lot of work. The majority of the bard community uses the program MidiEditor to edit .mid files, although several other programs can be used to create or edit them. 

![img](/img/MidiEditorScreenshot.png)

To convert a midi file to BMP format, the first thing you need to do is to make sure there is a track for every instrument. Note that "tracks" and "channels" are separate things, and that neither BMP nor MogNotate will read or use channel data. 

The second step is to rename every track to the name of the instrument you want to assign to that part. Additionally, if the notes in the midi file for that instrument are not in the default octave range (C3-C6), you can specify a different octave range in the name of the track with a positive or negative number, indicating how many octaves to shift a track up or down to bring it into the C3-C6 range.

For example, the following are valid BMP Format track names:

| Track Name  | Description                             |
| :---        |    :---                                 |
| Flute-1     | A flute in the octave range C4-C7       |
| Harp        | A harp in the default range of C3-C6    |
| Horn+1      | A horn in the octave range C2-C5        |
| Tuba+2      | A tuba in the octave range C1-C4        |

Note that any notes that are outside of your chosen three octave range will be ignored. 

Once you have made your instrument and octave range selections, save your .mid file and import it into MogNotate to generate both a .yaml file and a .mmsong file, then hit play to hear it played. 

## About MogApp .yaml files

When you import in a BMP formatted midi, a .yaml file will be created for you. However, you may want to make changes to the song using this file, or you may want to write a .yaml file yourself and skip this step. 

Let's look at a working example of a .yaml file that contains an example of everything you will likely need.

```yaml
songs:
- title: Mario - The Luma and the Hat
  description: 'Bards: 6 Singers: 0'
  file: 'Mario - The Luma and the Hat.mid'
  standard:
  - tracks:
      0:
        modifiers: []
    instrument: Panpipes
    octave: 4
    bards: 1
    modifiers: []
  - tracks:
      1:
        modifiers: []
    instrument: Saxophone
    octave: 3
    bards: 1
    modifiers: []
  - tracks:
      2:
        modifiers: []
    instrument: Lute
    octave: 2
    bards: 1
    modifiers: []
  - tracks:
      3:
        modifiers: []
    instrument: Horn
    octave: 2
    bards: 1
    modifiers: []
  drum:
  - tracks: 
      4:
    snare_drum_bards: 1
    bass_drum_bards: 1
  lyric: []

```

There's quite a bit to unpack here, so let's just go down this file and explain what everything is doing. It's not really as complicated as it looks at first glance.

### File header

The first thing you will need to do is give your song a title, a description, and tell it what .mid file it will reference. 

* **title:** - Here is where you put the title of your song. This is the title that will show up when you select the song in MogNotate or MogAmp. Conveniently, you can copy/paste the name of the song from MogAmp, if you want to tell your audience what you're playing. 
* **description:** - By default, MogNotate will fill this in with how many bards and singers it requires when you import a Midi, but this can be whatever you want it to be. 
* **file:** - Here is where you will copy/paste the name of the .mid file you will be using. Note: You will probably want to keep your .mid files in the same folder as your .yaml files.

### Instrument selection

Everything after ```standard:``` and up to the ```drum:``` line will be your standard instrument selection choices.

* **- tracks:** - Here is where you will select what tracks a particular instrument section will use. Normally you will only pick one track, but you can also assign multiple tracks to the section like this:
```yaml
- tracks:
      0:
      1:
  instrument: Harp
  octave: 3
  bards: 1
```
* **instrument:** - This is the instrument that will be given to the bard or bards that play this section. Note that currently you can only assign one instrument per section. Note that instrument names are capitalized with spaces removed. For example, the double bass would be ```DoubleBass```.
* **octave:** - The octave range for the notes in the midi file that you want to be played. The number refers to the octave of the lowest C note in that octave range. For example, ```octave: 3``` means C3-C6, ```octave: 2``` means C2-C5, and ```octave: 4``` means C4-C7. 
* **bards:** - While you can only assign one type of instrument per section, you can give that instrument to multiple bards! This is especially helpful for tracks with polyphony or chords. A note will only be played by one bard at a time, but if a chord pops up, MogNotate will distribute those notes evenly between the bards. 
* **modifiers:** - An optional setting that modifies how the program interprets the notes selected. Each track in a section can have a pre-merge modifier, and at the end there is a post-merge modifier. There are currently two possible modifiers: *ignore range* and *move range*. **TODO: PUT MORE INFO HERE.**

### Drum mapping

One of the biggest inconveniences in writing bard music in Midi is that the in-game percussion are pitched, while the percussion instruments in midi files are assigned to notes on the percussion channel in an orderly, yet non-pitched fashion. MogNotate will help you by mapping percussion events to their proper in-game note for the bass drum, snare drum, cymbal, and bongo! Note: The Timpani actually IS a pitched instrument in real life, and should be mapped in the normal instrument section.

If you have no drums in your song, you can simply leave the section blank with ```drums: []```.

This part is very similar to the standard instrument assignment section. You will select which tracks to use with ```- tracks:```. You can then assign how many of each kind of drum instrument you would like to give this section with the commands ```snare_drum_bards:```, ```bass_drum_bards:```, ```bongo_bards:```, and ```cymbal_bards:```. 

MogNotate will use its default percussion mapping settings, but you can further customize what midi percussion notes get assigned to what instrument and what in-game note. For more information on this, as well as a list of the default percussion mappings, check out the page on the drum mapper. 

### Lyrics mapping

MogNotate and MogDoot both support lyrics! If a song has lyrics, then any performer who is assigned a singing part will have lyrics copy/pasted into the chat box in time with the music. The lyrics themselves are written in the .yaml file, while the timing of those lyrics are handled in the midi file with what are called "keyswitch events", which are basically just notes played super low. 

If your song has no lyrics, simply leave the section blank with ```lyric: []```.

If you would like to add lyrics to your song, check out the page on the lyrics mapper. 

## What are "active voices"?

In FFXIV, every time you play a note, you are playing a sound sample. Even if you let go of that note, the sound sample will continue to play to completion. This is called a "voice". The actual length of this sound sample depends on the instrument in particular, and can last around a second or more. Essentially, when you strum a three-note chord on your harp, you are actually creating three overlaping voices. 

The reason we care about this system is that FFXIV limits the amount of notes that are playing at any one time client-side. This limit is 16 active voices at a time. This sounds like a lot, but with particularly fast songs with many parts, you can easily hit this limit. When this limit is hit, any new voices being added will trigger the sudden deletion of the oldest still active voice.

This is most noticeable for longer, sustained notes that play while another instrument (or several) plays a faster section with more notes. However, if the oldest voice is a note that has long since stopped being audible, then this deletion is not a problem. 

MogNotate will simulate this system, displaying the active number of voices playing at any one time. This will help you spot sections of your song where a sustained note may suddenly be deleted because of too many active voices. If you would like to hear what a song would sound like without this system, you can uncheck "Limit Active Voices" to remove this cap. 

## In-game octave ranges

Every instrument in FFXIV has a three octave range, from a low C to a high C. However, not every instrument has the SAME octave range. Some instruments are naturally higher or lower in pitch than others, and knowing what particular octave range an instrument plays in will help you arrange your music and make better instrument selection choices. 

| Instrument  | Octave range |
| :---        |    :---      |
| Piano       | C4-C7        |
| Harp        | C3-C4        |
| Fiddle      | C2-C5        |
| Lute        | C2-C5        |
|             |              |
| Fife        | C5-C8        |
| Flute       | C4-C7        |
| Oboe        | C4-C7        |
| Panpipes    | C4-C7        |
| Clarinet    | C3-C6        |
|             |              |
| Trumpet     | C3-C6        |
| Saxophone   | C3-C6        |
| Trombone    | C2-C5        |
| Horn        | C2-C5        |
| Tuba        | C1-C4        |
|             |              |
| Violin      | C3-C6        |
| Viola       | C3-C6        |
| Cello       | C2-C5        |
| Double Bass | C1-C4        |
|             |              |
| Timpani     | C2-C5        |

