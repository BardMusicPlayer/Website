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

## BMP 포맷이란?

다른 악기 연주 프로그램인 Bard Music Player는 미디 트랙을 어떤 악기가 어떤 음 높이에서 연주해야 할지 표기하기 위해서 **트랙 이름 형식**을 만들었습니다. 이미 대부분의 음유시인 커뮤니티에서는 미디 파일들을 이 형식에 맞추기 위해 노력을 기울였고, 그동안 이 규격에 맞는 방대한 자료(악보)를 만들어 왔습니다. 덕분에 MogNotate가 이 미디 자료들을 읽어오게 만드는 것만으로도 많은 작업량을 줄일 수 있었습니다. 대부분의 음유시인 악보 작업자들은 MidiEditor 프로그램을 사용하지만, midi 파일을 편집할 수 있는 프로그램이라면 다른 어떤 것을 사용해도 괜찮습니다. 

![img](/img/MidiEditorScreenshot.png)

midi 파일을 BMP 포맷으로 바꾸려면, 가장 먼저 해야 할 것은 각 악기별로 트랙이 나누어져 있는지 확인하는 것입니다. 미디 파일 속의 "track"과 "channel"은 전혀 다른 개념임을 명심하세요. BMP나 MogNotate 모두 "채널 데이터"는 사용하지 않습니다.

두 번째로 각각의 **미디 트랙**의 이름을 할당하고 싶은 **악기의 이름**으로 바꿔줘야 합니다. 미디 파일 속의 음들이 연주 기본 범위(C3-C6)에 맞지 않는다면, 트랙 이름 뒤에 그 차이만큼의 **양수**(+1)나 **음수**(-1)를 붙여서 옥타브 높이를 맞춰줄 수 있습니다. 

여기 아래의 예시는 BMP 형식에 맞춘 미디 파일의 트랙 이름입니다.

| Track Name  | 설명                                                                     |
| :---        |  :---                                                                    |      
| Flute-1     | 플루트의 소리는 건반보다 옥타브 높음(C4-C7), **-1**을 붙여서 건반 범위에 맞춤 |
| Harp        | 하프의 소리는 건반과 같음(C3-C6)                                           |
| Horn+1      | 호른의 소리는 건반보다 옥타브 낮음(C2-C5), **+1**을 붙여서 건반 범위에 맞춤   |
| Tuba+2      | 튜바의 소리는 건반보다 2옥타브 낮음(C1-C4), **+2**를 붙여서 건반 범위에 맞춤  |

건반의 음 범위에서 벗어나는 음은 모두 무시된다는 점을 기억하세요.

악기 이름과 옥타브를 확인했다면, 미디 파일을 저장하고 MogNotate에서 불러오기 하여 yaml 파일과 mmsong 파일을 만드세요. 미리 듣기를 하고 싶다면 아래쪽의 재생 버튼을 눌러보세요.

## MogApp의 yaml 파일이란?

MogNotate에서 midi 파일을 불러오기 할 때 yaml 파일이 생성됩니다. 곡의 몇 가지를 수정하고 싶다면 이렇게 생성된 파일을 사용해도 되고, 불러오기를 통한 생성과정 없이 직접 yaml 파일을 처음부터 작성해도 됩니다.

yaml 파일의 예제를 통해 여러분들에게 필요한 기능들을 설명드리겠습니다.

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

설명드려야 할 부분이 많기 때문에 아래쪽에서 각각 어떤 기능들이 있는지 파트별로 나눠서 설명드리도록 하겠습니다. 처음 보면 어렵게 느끼실 수 있지만, 알고 보면 그렇게 어렵지 않습니다.

### 파일 헤더 (시작 부분)

가장 먼저 작성해야 할 것은 **곡의 제목**, **설명**, 그리고 어떤 **미디 파일**을 음악 데이터로 사용할 것인지를 명시하는 것입니다.

* **title:** - 여기에 곡의 제목을 적으면 됩니다. 이 곳에 넣은 제목은 MogNotate 또는 MogAmp에서 불러왔을 때 표기됩니다. 만약 관객들에게 지금 연주하는 곡의 제목을 알려주고 싶다면, MogAmp에 출력된 제목을 드래그해서 복사 & 붙여넣기 하면 아주 편리합니다.
* **description:** - 기본적으로 MogNotate가 미디를 불러오기 할 때 여기를 자동으로 작성할겁니다. 음유시인이나 가수가 **총 몇 명**이 필요한지 적는 곳입니다. 하지만 이 부분도 여러분이 원하는 대로 고칠 수 있습니다.
* **file:** - 사용하고자 하는 미디의 파일 이름을 이 곳에 기입합니다. 주의 : 미디 파일과 yaml 파일을 같은 폴더 안에 보관하는 것이 좋습니다.

### 악기 선택

```standard:``` 다음 줄 부터 ```drum:``` 직전 줄 까지가 기본적으로 여러분이 악기를 선택해서 기입하는 구간입니다.

* **- tracks:** - 이 곳은 여러분의 악기가 미디의 어떤 트랙을 연주할지 골라주는 곳입니다. 보통 한 악기에 한 트랙만 고르면 되지만, 아래의 방식 처럼 여러 트랙을 골라줄 수 있습니다. 
```yaml
- tracks:
      0:
      1:
  instrument: Harp
  octave: 3
  bards: 1
```
* **instrument:** - 이 곳은 해당하는 트랙을 연주할 음유시인(들)이 사용할 악기를 골라주는 곳입니다. *아직은* 한 섹션당 한 악기만 할당할 수 있습니다. 악기 이름은 띄어쓰기는 없이, 대문자를 넣어서 입력해야 합니다. 예를 들면 더블 베이스(double bass)는 ```DoubleBass``` 라고 입력해야 합니다.
* **octave:** - 재생할 음에 대한 옥타브 범위를 정해주는 곳입니다. 숫자는 연주될 범위 안에서 가장 낮은 도(C) 음을 나타냅니다. ```octave: 3``` 표기는 C3-C6 범위를 연주할 것을 의미합니다. ```octave: 2``` 표기는 C2-C5, ```octave: 4``` 표기는 C4-C7 범위를 연주할 것을 의미합니다. 
* **bards:** - 섹션당 악기는 한 종류만 고를 수 있지만, 연주자 수는 여러 명이 연주하도록 배분할 수 있습니다! 이 기능은 특히 **화음**이 있는 트랙에 유용합니다. 한 음만 있는 부분은 한 명만 연주하다가, 화음 부분에서는 할당된 연주자들이 나눠서 연주하도록 MogNotate가 자동 배분합니다.
* **modifiers:** - *나중에* 프로그램이 트랙의 음을 어떻게 해석할지 수정하는 부가기능이 추가됩니다. 섹션의 각각의 트랙에는 pre-merge modifier를 붙이고, 마지막에는 post-merge modifier를 줄 것입니다. *ignore range(범위 무시하기)*, *move range(범위 옮기기)* 라는 기능을 만들 것입니다.

### Drum mapping

One of the biggest inconveniences in writing bard music in Midi is that the in-game percussion are pitched, while the percussion instruments in midi files are assigned to notes on the percussion channel in an orderly, yet non-pitched fashion. MogNotate will help you by mapping percussion events to their proper in-game note for the bass drum, snare drum, cymbal, and bongo! Note: The Timpani actually IS a pitched instrument in real life, and should be mapped in the normal instrument section.

If you have no drums in your song, you can simply leave the section blank with ```drums: []```.

This part is very similar to the standard instrument assignment section. You will select which tracks to use with ```- tracks:```. You can then assign how many of each kind of drum instrument you would like to give this section with the commands ```snare_drum_bards:```, ```bass_drum_bards:```, ```bongo_bards:```, and ```cymbal_bards:```. 

MogNotate will use its default percussion mapping settings, but you can further customize what midi percussion notes get assigned to what instrument and what in-game note. For more information on this, as well as a list of the default percussion mappings, check out the page on the drum mapper. 

### Lyrics mapping

MogNotate and MogDoot both support lyrics! If a song has lyrics, then any performer who is assigned a singing part will have lyrics copy/pasted into the chat box in time with the music. The lyrics themselves are written in the .yaml file, while the timing of those lyrics are handled in the midi file with what are called "keyswitch events", which are basically just notes played super low. 

If your song has no lyrics, simply leave the section blank with ```lyric: []```.

If you would like to add lyrics to your song, check out the page on the lyrics mapper. 

## "active voices"는 무엇인가요?

파이널판타지14 속에서 한 음을 연주할 때마다 소리 샘플 파일이 재생됩니다. 건반에서 손을 떼더라도 소리 샘플은 그 여운이 끝날 때까지 계속 재생됩니다. 바로 이것이 "voice"라고 불립니다. 소리 샘플의 "실제 길이"는 악기에 따라 모두 다르며, 1초 이상의 긴 여운을 남기는 악기도 있습니다. 본질적으로, 하프에서 세 음을 친다면, 실제로 소리 세 개를 겹쳐 쌓아서 화음을 이루게 됩니다.

우리가 이 시스템을 주의하는 이유는, 파이널판타지14 클라이언트에서 한 번에 재생되는 **소리의 개수를 제한**하는 데에 원인이 있습니다. 한 번에 16 active voices라는 제한이 있는데요, 많은 듯 보이지만 빠르게 연주되는 곡들은 이 "16"의 제한에 금방 부딪히게 됩니다. 이 소리 중첩 제한을 넘겨서 추가로 악기 소리가 더해지면, 오래된 소리 샘플부터 **갑작스럽게** 삭제됩니다. 

이 현상은 특히 **소리의 여운이 길게 남는 악기**로 **빠른 속도의 연주**를 할 때 굉장히 두드러지게 나타납니다. 물론, 가장 오래된 소리 샘플이 이미 건반에서 손을 뗀 지 오래되어 소리가 들릴락 말락 하게 남아있던 것이라면 이런 현상은 별문제가 되지 않습니다.

MogNotate는 이 시스템을 미리 시뮬레이션해서 현재 재생되고 있는 active voice(활성 소리 샘플)의 수를 보여줍니다. 이 기능은 곡 연주 중 소리가 갑자기 끊어지는 부분이 어디에 나타날지 찾는 데에 도움이 됩니다. 이런 기능 없이 곡을 들어보고 싶으시다면 "Limit Active Voices" 체크박스를 해제해 주세요. 

## 게임 속 악기의 옥타브 범위

파이널판타지14의 악기들은 모두 낮은 도 부터 높은 도 까지의 3 옥타브 범위입니다. 그러나 **모든 악기**가 건반 높이와 같은 음 높이를 갖는 것은 아닙니다. 몇몇 악기들은 건반보다 더 높거나 낮은 소리를 내기도 합니다. 악기별 옥타브 차이를 알아둔다면 편곡을 하거나 악기를 고르는 과정에 도움이 될 것입니다.

| Instrument(한글명)| 옥타브 범위 |
| :---              |    :---   |
| Piano             | C4-C7   |
| Harp              | C3-C4   |
| Fiddle(피치카토)   | C2-C5   |
| Lute(스틸기타)     | C2-C5   |
|                   |         |
| Fife(피콜로)       | C5-C8   |
| Flute             | C4-C7   |
| Oboe              | C4-C7   |
| Panpipes          | C4-C7   |
| Clarinet          | C3-C6   |
|                   |         |
| Trumpet           | C3-C6   |
| Saxophone         | C3-C6   |
| Trombone          | C2-C5   |
| Horn              | C2-C5   |
| Tuba              | C1-C4   |
|                   |         |
| Violin            | C3-C6   |
| Viola             | C3-C6   |
| Cello             | C2-C5   |
| Double Bass       | C1-C4   |
|                   |         |
| Timpani           | C2-C5   |

