---
id: mogdoot
title: MogDoot
sidebar_label: MogDoot
---


## What is MogDoot?

MogDoot is the program that actually controls your character(s) and plays the music for you. MogDoot takes orders from MogAmp, the conductor program, and has no interface itself to select and load music files. 

If you are "multiboxing" and running multiple bards on one computer, you will have one instance of MogAmp running and one instance of MogDoot running. If you are using multiple computers, or doing a performance with friends, only one computer will be running MogAmp, while every computer running a performer (or several) will be running MogDoot. 

Since MogDoot is only designed to control your character and take orders from another program, there is not much in the way of an interface for it. However, it is incredibly important that you set up your keybindings properly, both in MogDoot and in-game. 

## Setting up MogDoot

Once you have started MogDoot, click on "Keybinds" on the top right corner. A window will pop up with all the keybindings you need to set. 

![img](/img/mogdoot-keyboard-setup.png)

Note that there is no "correct" keybindings, as long as all the keys you pick actually work in-game. The most important thing is that your keybindings in MogDoot and in FFXIV match. To make sure they match, go ahead and open up your performance settings. While you're at it, make sure that "Assign all notes to keyboard" is checked so that you have access to the full, expanded keyboard. 

![img](/img/in-game-settings.png)

Once you have confirmed that all your notes are properly set up, make sure that your hotbar is set up as well. Note that every instrument needs to be given a hotbar slot that is assigned a keybinding. If the instrument is not given a hotbar slot with a keybinding, MogDoot will be unable to use it. 

Lastly, there is a bit of an unusual keybinding that MogDoot requires: the XBox BACK Button/Playstation SELECT Button. This is not bound in FFXIV by default, as it is, as the name suggests, normally a controller button. However, binding this to a keyboard button is essential for the party leader to start ensemble mode. 

In order to bind this key, press ESC to open your system menu, and then select "Keybind". In the keybind menu, click on "Gamepad" and find the "BACK Button" setting as shown below. Then, assign it to a keyboard key, and make sure you have the same key selected in MogDoot.

![img](/img/select-button-keybind.png)

Once this is finished, your game should be set up for performance. 

## Optional: Setting up performance order

Currently, neither MogDoot nor MogAmp have an interface to select which bard plays what part. Instruments will be assigned essentially at random. If this is not ideal for you, you can change what order your bards are assigned instruments by changing the name of the FFXIV window that bard is running on. 

One way you can do this is by running a window renamer program. If you need a copy of this program, feel free to ask for it on the MogMusic discord. A second option is to use XIVLauncher's "Window Title Changer" plugin. 

To arrange your bards, rename their windows by numerical order, such as "FINAL FANTASY XIV 1", "FINAL FANTASY XIV 2" and so on. 

If your performance has a singing part, you must assign a singing part to your bards, such as "FINAL FANTASY XIV singer1", "FINAL FANTASY XIV singer2" and so on.

Once a window has been renamed, restart MogDoot to finalize these changes. 

## Optional: Hotbar switching macro

If you actually use the bard class for things other than performance, the fact that you need to dedicate at least two whole hotbars with keybindings to your instruments may not be exactly convenient. Thankfully, FFXIV has macro commands to copy hotbars. For example, here's two macros that you could use. The first copies hotbars 8 and 9 into hotbars 1 and 2 respectively, while the second copies hotbars 6 and 7 into hotbars 1 and 2. 

```
/hotbar copy BRD 8 BRD 1
/hotbar copy BRD 9 BRD 2
/echo Performance hotbar loaded.
```

```
/hotbar copy BRD 6 BRD 1
/hotbar copy BRD 7 BRD 2
/echo Combat hotbar loaded.
```

To use this, simply load up hotbar 8 and 9 with your instruments, and hotbars 6 and 7 with your regular combat actions. 
