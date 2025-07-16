import { useState } from "react";
import { Play, Pause, FileText, ArrowLeft, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MusicPage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const [showLyrics, setShowLyrics] = useState<number | null>(null);
  const [warningAccepted, setWarningAccepted] = useState(false);

  const compositions = [
    {
      title: "That Guy in the Glass",
      description: "A haunting reflection on aging and identity, the song captures a moment of confronting one's changed self in the face of time.",
      duration: "2:36",
      audioUrl: "https://egbmulrdrsmhxnogompo.supabase.co/storage/v1/object/public/music//That%20Guy%20in%20the%20Glass.mp3",
      lyrics: `(Verse 1)
Dark phone screen on a Friday night
Standing in the hard porch light
Waited for the car to show
Then saw a man I didn't know

(Chorus)
And I thought, who is that man?
Staring back at me again
A face I don't quite understand
Who is that man?

(Verse 2)
He's got some lines around his eyes
From a few too many fast goodbyes
And my father's stubborn chin
And the shape of the trouble I'm in

(Chorus)
And I thought, who is that man?
Staring back at me again
A face I don't quite understand
Who is that man?

(Bridge)
You think you'll stay forever young
A song forever halfway sung
But the years just show up on your face
And put you in a different place

(Outro)
That guy just stares me in the eye
We don't even say goodbye
A push of a button, a flash of light...
And he's gone back into the night.`
    },
    {
      title: "Artificial Moon",
      description: "A bittersweet ode to late-night binge-watching, where fleeting comfort under a screen's glow slowly gives way to exhaustion and quiet regret.",
      duration: "3:09",
      audioUrl: "https://egbmulrdrsmhxnogompo.supabase.co/storage/v1/object/public/music//The%20Autoplay%20Lie.mp3",
      lyrics: `(Verse 1)
The house is asleep, the city's a hum
My brain is finally quiet, my day is finally done
Got my worn-out blanket, a warm cup in my hand
Just one little story in a far and distant land
A forty-minute visit, that's the promise that I make
A simple little episode, for goodness gracious sake.

(Chorus)
But oh, that sweet and gentle lie, "I'll turn it off right soon"
Underneath the patient, pale-blue light of an artificial moon
And the hours turn to minutes as the next one starts to play
You tell yourself tomorrow's still a whole world away.

(Verse 2)
My tea is cold, the snack bowl's bare, I don't remember how
The characters feel more like friends than anyone I know right now
I blinked and it was midnight, I'll blink and it'll be three
It's funny how the world shrinks down to just the screen and me
I know I should be sleeping, but the story's got me deep
And promises are easy things for tired souls to keep.

(Chorus)
And oh, that sweet and gentle lie, "I'll turn it off right soon"
Underneath the patient, pale-blue light of an artificial moon
And the hours turn to minutes as the next one starts to play
You tell yourself tomorrow's still a whole world away.

(Bridge)
Then a bird sings outside my window, a single, hopeful sound
And the first grey light of morning puts a crack in holy ground
And suddenly I'm tired, a deep and aching blue
For the night I just gave up, and for the day I have to do.

(Outro)
The sun is up. The show is done.
And I feel everything... and nothing... all at once.`
    },
    {
      title: "On Mute, I'm a Rockstar",
      description: "A hilarious anthem for the remote work era, celebrating the chaos, comforts, and clever fakery of being a professional powerhouse—from the waist up.",
      duration: "4:17",
      audioUrl: "https://egbmulrdrsmhxnogompo.supabase.co/storage/v1/object/public/music//On%20Mute,%20I'm%20a%20Rockstar.mp3",
      lyrics: `(Verse 1)
Sunrise filters through the blinds, another day begins
My laptop glows, the holy grail, where all the money wins
I sip my coffee, black and strong, a professional, you see
My calendar is packed with calls from nine to half-past three
I've got a collared shirt on top, it's ironed and looking smart
They think I'm in a power-suit, a corporate work of art
My background's blurred, a tasteful shelf of high-brow literature
They don't suspect I'm wearing shorts I bought in '94.

(Chorus)
'Cause on the screen, I'm Mr. Poised, I'm "synergy" and "spend"
I'm nodding sagely at the charts, a valuable new friend
I'm "circling back" and "pivoting," my insights are so deep
But just below the camera's view, my cat is fast asleep
On a pile of laundry I ignored for seven days or more
I'm a titan of the industry... from the waist up, that's for sure!
You hear my "Yes, I'm on it, boss!" my confident, clear tone
But I'm on mute, I'm yelling at a spider on my phone!

(Verse 2)
The quarterly review is on, the numbers are intense
I'm sharing slides on market growth, it all makes perfect sense
I talk of "leveraging our assets," and "proactive enterprise"
While I am subtly accepting a delivery of fries
The doorbell rang, I did a lunge, a silent, ninja roll
To grab the greasy paper bag and satisfy my soul
I'm back on screen, a seamless move, they didn't see a thing
They're praising my strategic mind, as I dip an onion ring.

(Chorus)
'Cause on the screen, I'm Mr. Poised, I'm "synergy" and "spend"
I'm nodding sagely at the charts, a valuable new friend
I'm "circling back" and "pivoting," my insights are so deep
But just below the camera's view, my cat is fast asleep
On a pile of laundry I ignored for seven days or more
I'm a titan of the industry... from the waist up, that's for sure!
You hear my "Yes, I'm on it, boss!" my confident, clear tone
But I'm on mute, I'm having a debate about a scone!

(Bridge)
Someone asks a question, and my brain begins to race
My internet decides right now to leave without a trace
The screen is frozen on my face, a weird, confusing smile
They think I'm deep in contemplation, I've been buffering all this while!
My microphone's not working! I am clicking in despair!
I'm miming out the answer with a panicked, frantic flair!

(Chorus)
But on the screen, I'm Mr. Poised, I'm "synergy" and "spend"
I'm nodding sagely at the charts, a valuable new friend
I'm "circling back" and "pivoting," my insights are so deep
But just below the camera's view, my dog is now awake and wants to leap!
On a pile of laundry I ignored for nine days, maybe more!
I'm a titan of the industry... from the waist up, that's for sure!
You hear my "Yes, I'm on it, boss!" my confident, clear tone
But I'm on mute, I'm a rockstar, and this office is my home!

(Outro)
Yeah, on mute, I'm a rockstar!
"Thanks, team, great call!"`
    },
    {
      title: "Blurry Bicycles",
      description: "A wildly funny meltdown over CAPTCHA tests, where proving you're human feels like the most robotic thing of all.",
      duration: "3:57",
      audioUrl: "https://egbmulrdrsmhxnogompo.supabase.co/storage/v1/object/public/music//The%20Ballad%20of%20the%20Blurry%20Bicycles.mp3",
      lyrics: `(Verse 1)
I'm buying a ticket to see my Aunt Sue
The website is purple, the font's number two
I've filled in my details, my credit card's fine
Just one final hurdle, one more dotted line
A little white checkbox, a simple request
To prove I'm a human and not some weird pest
I click it with confidence, feeling so grand
Then a box pops right open and spoils all my plans.

(Chorus)
It asks, "Are you a robot?" and I say, "Of course not!"
Then show me the pictures of things that they've got
"Select all the crosswalks," I click them with glee
But one's kinda faded... is that part of a tree?
I fail the first trial, my sanity slips
My palms start to sweat at my own fingertips
Oh, the ballad of blurry bicycles, the curse of the cars
I'm just a human, behind these digital bars!

(Verse 2)
The next set of pictures, a much tougher game
They're grainy and ancient, it's a digital shame
"Select all the traffic lights," but one's in the sky
Is that a red signal or a UFO flying by?
There's a corner of one in the very last square
Does a sliver of stoplight count? I just don't dare!
I click it, I risk it, my mouse starts to shake...
"TRY AGAIN," screams the red text, for goodness's sake!

(Chorus)
It asks, "Are you a robot?" and I shout, "Of course not!"
Then show me the pictures of things that they've got
"Select all the crosswalks," I click them with glee
But one's kinda faded... is that part of a tree?
I fail the third trial, my sanity slips
My palms start to sweat at my own fingertips
Oh, the ballad of blurry bicycles, the curse of the cars
I'm just a human, behind these digital bars!

(Bridge)
I start to have doubts now, I look at my hand
Is it flesh and bone, really? I don't understand.
Do I run on batteries? Do I dream in code?
Have I ever truly tasted a pie à la mode?
I poke my own stomach, it makes a soft sound
But a well-built automaton could surely be round!
The pictures are mocking me, laughing at my plight
Maybe I do want to exterminate all human life... wait, that doesn't sound right.

(Outro Chorus)
It asks, "Are you a robot?" and I scream, "I DON'T KNOW!"
Just look at the pictures and let me just GO!
"Select all the buses," but one is a van!
I'm giving up trying, I don't have a plan!
I'm clicking on fire hydrants and mountains and signs!
I'm clicking the grid lines, ignoring the lines!
Oh, the ballad of blurry bicycles, the curse of the cars...
FORGET AUNT SUE! I'M GOING TO MARS!`
    },
    {
      title: "A Bit of Bitter Butter",
      description: "A tongue-twisting, breathless anthem of lyrical chaos, where one poor singer battles butter-based insanity at breakneck speed.",
      duration: "4:18",
      audioUrl: "https://egbmulrdrsmhxnogompo.supabase.co/storage/v1/object/public/music//A%20Bit%20of%20Bitter%20Butter.mp3",
      lyrics: `(Verse 1)
You want a song that twists the lips
With verbal backflips, quips, and slips
A script that's built to make you choke
A lyrical, inside joke
Well, I'm the one who's gotta sing it
The stupid message, gotta bring it
So take a seat and watch the show
Get ready, set, now here we go!

(Build-up)
My jaw is clicking, getting tense!
These words just make no freaking sense!
It's coming up, I'm seeing red!
The stupid phrase stuck in my head!

(Chorus/drop)
[fast rap, breathless, machine-gun pace]
Betty Botter bought some butter but she said the butter's bitter!
If I put it in my batter, it will make my batter bitter!
But a bit of better butter, that would make my batter better!
So she bought a bit of butter, better than her bitter butter!
And she put it in her batter and the batter wasn't bitter!

(Verse 2)
My lips are numb, my mouth is dry
I think I saw a vowel fly
Right out my mouth and hit the floor
Can't sing that chorus anymore
But the drummer's counting in again
This is a nightmare, not a friend
I hate this song, I hate the beat
Control-Alt-Friggin-Delete!

(Build-up)
My jaw is locked, it's cramping now!
I've got to do it anyhow!
It's coming back, that evil phrase!
Lost in a consonantal haze!

(Chorus/Drop)
Betty Botter bought some butter but she said the butter's bitter!
If I put it in my batter, it will make my batter bitter!
But a bit of better butter, that would make my batter better!
So she bought a bit of butter, better than her bitter butter!
And she put it in her batter and the batter wasn't bitter!

(Bridge)
And in the end, what have we learned?
A lesson earnestly well-earned
That if your dairy tastes like trash
Don't be afraid to spend the cash
For just a bit of better butter...
...it makes everything... less... utter... crap.

(Outro)
BETTY! BATTER! BITTER! BETTER!
SYSTEM... FAILURE...`
    },
    {
      title: "Spidermix",
      description: "?????????",
      duration: "3:28",
      audioUrl: "https://egbmulrdrsmhxnogompo.supabase.co/storage/v1/object/public/music//Spidermix%20(1).mp3",
      isParody: true,
      lyrics: `[Chorus]
Spiderman Spiderman
tune churaya mere dil ka chain
Spiderman Spiderman
tune churaya mere dil ka chain

[Verse 1]
Dekh ke tere kartab yaara
Mai toh ho gayi teri fan
Spiderman Spiderman
tune churaya mere dil ka chain hooo

[Verse 2]
Tanhayee tadpati hai,
yaad tumhari aati hai
thandi thandi purvai
ched ke mujhko jaati hai
Tanhayee tadpati hai,
yaad tumhari aati hai
thandi thandi purvai
ched ke mujhko jaati hai
Teri tareef likh jo sake hooo
Teri tareef likh jo sake
nahi bana koi aisa pen

[Chorus]
Spiderman Spiderman
tune churaya mere dil ka chain
Spiderman Spiderman
tune churaya mere dil ka chain hooo

[Verse 3]
Tum toh meri jaan ho,
dil ka mere armaan ho
har ladki jo khana chahe
tum vo meetha paan ho
Tum toh meri jaan ho,
dil ka mere armaan ho
har ladki jo khana chahe
tum vo meetha paan ho
Yaad mei teri jaag jaag ke hooo
Yaad mei teri jaag jaag ke
thakne lage ye mere nain

[Chorus]
Spiderman Spiderman
tune churaya mere dil ka chain
Spiderman Spiderman
tune churaya mere dil ka chain hooo

[Verse 4]
Main toh tumpe marti hu
par duniya se darti hu
Karni chahu baat jo tumse
dil se apne karti hu
Main toh tumpe marti hu
par duniya se darti hu
Karni chahu baat jo tumse
dil se apne karti hu
Doli meri jaldi se le ja hooo
Doli meri jaldi se le jaa
Gadi le kar aa ja jaan

[Chorus]
Spiderman Spiderman
tune churaya mere dil ka chain
Spiderman Spiderman
tune churaya mere dil ka chain hooo`
    }
  ];

  const togglePlay = (index: number) => {
    setCurrentlyPlaying(currentlyPlaying === index ? null : index);
  };

  const toggleLyrics = (index: number) => {
    setShowLyrics(showLyrics === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {/* Spotlight effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        
        {/* Subtle particle animation */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Chill Zone
              </h1>
              <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
                When I'm not busy working, I write music. Here's a collection of songs I wrote (turned to songs using AI).
              </p>
            </div>

            {/* Music List */}
            <div className="space-y-6">
              {compositions.map((composition, index) => (
                <div key={composition.title}>
                  {/* Warning for parody song */}
                  {composition.isParody && !warningAccepted && (
                    <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-4">
                      <div className="text-center">
                        <h3 className="text-red-400 font-semibold text-lg mb-2">
                          Warning
                        </h3>
                        <p className="text-red-300/80 text-sm mb-4">
                          This song is a parody and you are listening to it at your own caution.
                        </p>
                        <Button
                          onClick={() => setWarningAccepted(true)}
                          className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-300"
                        >
                          I Understand, Continue
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  {/* Only show song if not parody or warning accepted */}
                  {(!composition.isParody || warningAccepted) && (
                    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 ${
                      composition.isParody ? 'border-red-500/20' : ''
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Button
                            onClick={() => togglePlay(index)}
                            className="w-12 h-12 rounded-full bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-400/30"
                            size="icon"
                          >
                            {currentlyPlaying === index ? (
                              <Pause className="w-5 h-5 text-cyan-300" />
                            ) : (
                              <Play className="w-5 h-5 text-cyan-300 ml-0.5" />
                            )}
                          </Button>
                          
                          <div>
                            <h3 className={`font-semibold text-lg ${
                              composition.isParody ? 'text-red-300' : 'text-white'
                            }`}>
                              {composition.title}
                            </h3>
                            <p className={`text-sm ${
                              composition.isParody ? 'text-red-300/70' : 'text-white/70'
                            }`}>
                              {composition.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <span className={`text-sm ${
                            composition.isParody ? 'text-red-300/50' : 'text-white/50'
                          }`}>
                            {composition.duration}
                          </span>
                          {composition.lyrics && (
                            <Button
                              variant="ghost"
                              className={`text-sm px-3 py-1 ${
                                composition.isParody 
                                  ? 'text-red-300/70 hover:text-red-300 hover:bg-red-500/10' 
                                  : 'text-white/70 hover:text-white hover:bg-white/10'
                              }`}
                              onClick={() => toggleLyrics(index)}
                            >
                              Lyrics
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Lyrics Display */}
                  {showLyrics === index && composition.lyrics && (!composition.isParody || warningAccepted) && (
                    <div className={`mt-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 relative ${
                      composition.isParody ? 'border-red-500/20' : ''
                    }`}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`absolute top-4 right-4 ${
                          composition.isParody 
                            ? 'text-red-300/70 hover:text-red-300 hover:bg-red-500/10' 
                            : 'text-white/70 hover:text-white hover:bg-white/10'
                        }`}
                        onClick={() => toggleLyrics(index)}
                      >
                        <X size={16} />
                      </Button>
                      <h4 className={`font-semibold text-lg mb-4 ${
                        composition.isParody ? 'text-red-300' : 'text-white'
                      }`}>
                        {composition.title} - Lyrics
                      </h4>
                      <pre className={`text-sm leading-relaxed whitespace-pre-wrap font-mono ${
                        composition.isParody ? 'text-red-300/80' : 'text-white/80'
                      }`}>
                        {composition.lyrics}
                      </pre>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom text */}
            <div className="text-center mt-16">
              <p className="text-white/60 leading-relaxed">
                I have been in love with music production since 2017. If these songs brought even a little smile to your face, then my job here is done.
                <br />
                Thanks for listening. More madness, melodies, and masti coming soon! 🎵✨
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MusicPage;