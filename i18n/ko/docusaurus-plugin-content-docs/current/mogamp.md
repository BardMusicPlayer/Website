---
id: mogamp
title: MogAmp
sidebar_label: MogAmp
---


## What is MogAmp?

MogAmp is essentially the "conductor" program. MogAmp does not control your character in-game like MogDoot does, but instead loads songs in the form of .mmsong files and sends commands to one or more instances of MogDoot. 

There is a reason MogAmp and MogDoot are seperate programs instead of one program like BMP. MogAmp and MogDoot were designed to be used not only by "multibox" ensembles, but also ensembles where the bards are running on separate computers, communicating with each other over LAN or the internet. Having one program that is acting as the conductor allows one person to control an ensemble, even if every single bard is running on a completely different computer. The person running the ensemble doesn't even have to be one of the performers!

## How to use MogAmp

Only one instance of MogAmp should be running, even if multiple computers are being used. Once MogAmp is running, start one window of MogDoot on every computer that is running a bard. Even if a computer is running several bards, they still only need one MogDoot window open.

So, essentially, if you are "multiboxing" and running multiple bards on one computer, start one MogAmp window and one MogDoot window. If you are performing with a friend, or splititng the work between multiple computers, start MogAmp on one computer and one instance of MogDoot on every computer. 

MogAmp should connect to MogDoot if they are both running on the same computer, on the same LAN network, connected to each other through the "MogCloud", or connected through a VPN that simulates a LAN network such as Hamachi or ZeroTier. 

Once all your bards are connected, it's simply a matter of clicking "Load Song" and selecting the .mmsong file you want to use, hitting "Send to MogDoot" to tell every bard to ready their instruments, and then hitting "Play" to start the song. 

Note that hitting "Play" will tell every bard to attempt to start ensemble mode (assuming the song has more than one performer). Only the party leader can actually start ensemble mode, but once the party leader successfully does this, the song will immediately start. 

For this to work, the party leader MUST have set their "Xbox BACK Button / Playstation SELECT Button" key binding both in-game and in the Keyboard Setup menu in MogDoot. **If the party leader has not done this, the play button will not work.** For more information on this, check out the page on MogDoot. 
