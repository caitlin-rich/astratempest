import React, { useState, useRef, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import { Audio } from 'expo-av';
import Constants from 'expo-constants';
import Slider from '@react-native-community/slider';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

const Files = [
  {
    id: 1,
    file: require('../sounds/578358main_kepler_star_KIC12268220C.mp3'),
    name: 'Kepler Star'
  },
  {
    id: 2,
    file: require('../sounds/584795main_saturn_radio_waves.mp3'),
    name: 'Saturn Radio Waves'
  },
  {
    id: 3,
    file: require('../sounds/603921main_voyager_jupiter_lightning.mp3'),
    name: 'Lightning on Jupiter'
  },
  {
    id: 4,
    file: require('../sounds/693857main_emfisis_chorus_1.mp3'),
    name:  'Emfisis Chorus'
  },
  {
    id: 5,
    file: require('../sounds/Enceladus Hiss audio 256 kbps.mp3'),
    name: 'Enceladus Hiss'
  },
  {
    id: 6,
    file: require('../sounds/interstellar.mp3'),
    name: 'Interstellar Radio Waves'
  },
  {
    id: 7,
    file: require('../sounds/whistler.mp3'),
    name: 'Whistler Waves'
  },
  {
    id: 8,
    file: require('../sounds/598980main_stardust_tempel1.mp3'),
    name: 'Stardust'
  },
];

//This is not my code, it's taken from a tutorial on Expo AV and is the only thing I could make work as I wanted! 
//Because I am using it to learn, I'm going through and making sure I understand every line and what it's doing as part of the whole. 
//I'm also modifying as needed. 

//I am also planning on going back and trying to find a better solution than duplicating all this code for each sound - I'm sure I can make this more DRY! Maybe making it a class and just calling new instance of the class for each one? But, I'm pressed for time, so although this isn't a perfect solution, it'll do for now. 


//idx 0
export function KeplerStar() {

  const [Loaded, SetLoaded] = useState(false);
  const [Loading, SetLoading] = useState(false);
  const [Playing, SetPlaying] = useState(false);
  const [Duration, SetDuration] = useState(false);
  const CurrentIndex = useRef(0);
  const [Value, SetValue] = useState(0);

  //Unsure why useRef and not just the new Audio.Sound - let's research! 
  const sound = useRef(new Audio.Sound());

  const LoadAudio = async (index) => {
    //Load Audio starts by setting Loading to true! Makes sense! 
    SetLoading(true);
    //Gets status of the current sound (as created on line 33)
    const checkLoading = await sound.current.getStatusAsync();
    //if sound is not loaded, load sound with file from the Files array. Can maybe hardcode this for each track subcomponent. 
    if (checkLoading.isLoaded === false) {
      try {
        //result stores the sound once the song is loaded
        const result = await sound.current.loadAsync(
          Files[index].file,
          {},
          true
        );
        if (result.isLoaded === false) {
          //unsure why this is needed? Maybe for if it's the last track or something? I wonder if I won't need this since i'm using this for single track
          SetLoading(false);
          SetLoaded(false);
        } else {
          //Works with the UpdateStatus function that I don't think I need. 
          //sound.current.setOnPlaybackStatusUpdate(UpdateStatus);
          SetLoading(false);
          SetLoaded(true);
          SetDuration(result.durationMillis);
          PlayAudio();
        }
      } catch (error) {
        SetLoading(false);
        SetLoaded(false);
      }
    } else {
      //hits this once the song is loaded and sets Loading to false and Loaded to true. 
      SetLoading(false);
      SetLoaded(true);
    }
    //Song is now loaded! 
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        //If song is loaded, we can set Playing to true. 
        if (result.isPlaying === false) {
          sound.current.playAsync();
          SetPlaying(true);
        }
      }
    } catch (error) {
      SetPlaying(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          //pauses the song if it's both loaded and playing
          sound.current.pauseAsync();
          SetPlaying(false);
        }
      }
    } catch (error) {
      SetPlaying(true);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>
        {Loading
          ? 'Loading Audio Please Wait...'
          : Playing === false
          ? `${Files[0].name}`
          : `Playing ${Files[0].name}`}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          alignItems: 'center',
        }}>


        {Loading ? (
          <ActivityIndicator size={'large'} color={'dodgerblue'} />
        ) : Loaded === false ? (
          <Ionicons
            name="md-reload-sharp"
            size={30}
            color="black"
            onPress={() => LoadAudio(0)}
          />
        ) : Playing ? (
          <Entypo
            name="controller-paus"
            size={40}
            color="black"
            onPress={() => PauseAudio()}
          />
        ) : (
          <Entypo
            name="controller-play"
            size={40}
            color="black"
            onPress={() => PlayAudio()}
          />
        )}

      </View>
    </View>
  );
}

//idx 1
export function SaturnRadioWaves() {

  const [Loaded, SetLoaded] = useState(false);
  const [Loading, SetLoading] = useState(false);
  const [Playing, SetPlaying] = useState(false);
  const [Duration, SetDuration] = useState(false);
  const CurrentIndex = useRef(0);
  const [Value, SetValue] = useState(0);

  //Unsure why useRef and not just the new Audio.Sound - let's research! 
  const sound = useRef(new Audio.Sound());

  const LoadAudio = async (index) => {
    //Load Audio starts by setting Loading to true! Makes sense! 
    SetLoading(true);
    //Gets status of the current sound (as created on line 33)
    const checkLoading = await sound.current.getStatusAsync();
    //if sound is not loaded, load sound with file from the Files array. Can maybe hardcode this for each track subcomponent. 
    if (checkLoading.isLoaded === false) {
      try {
        //result stores the sound once the song is loaded
        const result = await sound.current.loadAsync(
          Files[index].file,
          {},
          true
        );
        if (result.isLoaded === false) {
          //unsure why this is needed? Maybe for if it's the last track or something? I wonder if I won't need this since i'm using this for single track
          SetLoading(false);
          SetLoaded(false);
        } else {
          //Works with the UpdateStatus function that I don't think I need. 
          //sound.current.setOnPlaybackStatusUpdate(UpdateStatus);
          SetLoading(false);
          SetLoaded(true);
          SetDuration(result.durationMillis);
          PlayAudio();
        }
      } catch (error) {
        SetLoading(false);
        SetLoaded(false);
      }
    } else {
      //hits this once the song is loaded and sets Loading to false and Loaded to true. 
      SetLoading(false);
      SetLoaded(true);
    }
    //Song is now loaded! 
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        //If song is loaded, we can set Playing to true. 
        if (result.isPlaying === false) {
          sound.current.playAsync();
          SetPlaying(true);
        }
      }
    } catch (error) {
      SetPlaying(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          //pauses the song if it's both loaded and playing
          sound.current.pauseAsync();
          SetPlaying(false);
        }
      }
    } catch (error) {
      SetPlaying(true);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>
         {Loading
          ? 'Loading Audio Please Wait...'
          : Playing === false
          ? `${Files[1].name}`
          : `Playing ${Files[1].name}`}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          alignItems: 'center',
        }}>


        {Loading ? (
          <ActivityIndicator size={'large'} color={'dodgerblue'} />
        ) : Loaded === false ? (
          <Ionicons
            name="md-reload-sharp"
            size={30}
            color="black"
            onPress={() => LoadAudio(1)}
          />
        ) : Playing ? (
          <Entypo
            name="controller-paus"
            size={40}
            color="black"
            onPress={() => PauseAudio()}
          />
        ) : (
          <Entypo
            name="controller-play"
            size={40}
            color="black"
            onPress={() => PlayAudio()}
          />
        )}

      </View>
    </View>
  );
}

//idx 2
export function LightningOnJupiter() {

  const [Loaded, SetLoaded] = useState(false);
  const [Loading, SetLoading] = useState(false);
  const [Playing, SetPlaying] = useState(false);
  const [Duration, SetDuration] = useState(false);
  const CurrentIndex = useRef(0);
  const [Value, SetValue] = useState(0);

  //Unsure why useRef and not just the new Audio.Sound - let's research! 
  const sound = useRef(new Audio.Sound());

  const LoadAudio = async (index) => {
    //Load Audio starts by setting Loading to true! Makes sense! 
    SetLoading(true);
    //Gets status of the current sound (as created on line 33)
    const checkLoading = await sound.current.getStatusAsync();
    //if sound is not loaded, load sound with file from the Files array. Can maybe hardcode this for each track subcomponent. 
    if (checkLoading.isLoaded === false) {
      try {
        //result stores the sound once the song is loaded
        const result = await sound.current.loadAsync(
          Files[index].file,
          {},
          true
        );
        if (result.isLoaded === false) {
          //unsure why this is needed? Maybe for if it's the last track or something? I wonder if I won't need this since i'm using this for single track
          SetLoading(false);
          SetLoaded(false);
        } else {
          //Works with the UpdateStatus function that I don't think I need. 
          //sound.current.setOnPlaybackStatusUpdate(UpdateStatus);
          SetLoading(false);
          SetLoaded(true);
          SetDuration(result.durationMillis);
          PlayAudio();
        }
      } catch (error) {
        SetLoading(false);
        SetLoaded(false);
      }
    } else {
      //hits this once the song is loaded and sets Loading to false and Loaded to true. 
      SetLoading(false);
      SetLoaded(true);
    }
    //Song is now loaded! 
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        //If song is loaded, we can set Playing to true. 
        if (result.isPlaying === false) {
          sound.current.playAsync();
          SetPlaying(true);
        }
      }
    } catch (error) {
      SetPlaying(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          //pauses the song if it's both loaded and playing
          sound.current.pauseAsync();
          SetPlaying(false);
        }
      }
    } catch (error) {
      SetPlaying(true);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>
         {Loading
          ? 'Loading Audio Please Wait...'
          : Playing === false
          ? `${Files[2].name}`
          : `Playing ${Files[2].name}`}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          alignItems: 'center',
        }}>


        {Loading ? (
          <ActivityIndicator size={'large'} color={'dodgerblue'} />
        ) : Loaded === false ? (
          <Ionicons
            name="md-reload-sharp"
            size={30}
            color="black"
            onPress={() => LoadAudio(2)}
          />
        ) : Playing ? (
          <Entypo
            name="controller-paus"
            size={40}
            color="black"
            onPress={() => PauseAudio()}
          />
        ) : (
          <Entypo
            name="controller-play"
            size={40}
            color="black"
            onPress={() => PlayAudio()}
          />
        )}

      </View>
    </View>
  );
}

//idx 3
export function EmfisisChorus() {

  const [Loaded, SetLoaded] = useState(false);
  const [Loading, SetLoading] = useState(false);
  const [Playing, SetPlaying] = useState(false);
  const [Duration, SetDuration] = useState(false);
  const CurrentIndex = useRef(0);
  const [Value, SetValue] = useState(0);

  //Unsure why useRef and not just the new Audio.Sound - let's research! 
  const sound = useRef(new Audio.Sound());

  const LoadAudio = async (index) => {
    //Load Audio starts by setting Loading to true! Makes sense! 
    SetLoading(true);
    //Gets status of the current sound (as created on line 33)
    const checkLoading = await sound.current.getStatusAsync();
    //if sound is not loaded, load sound with file from the Files array. Can maybe hardcode this for each track subcomponent. 
    if (checkLoading.isLoaded === false) {
      try {
        //result stores the sound once the song is loaded
        const result = await sound.current.loadAsync(
          Files[index].file,
          {},
          true
        );
        if (result.isLoaded === false) {
          //unsure why this is needed? Maybe for if it's the last track or something? I wonder if I won't need this since i'm using this for single track
          SetLoading(false);
          SetLoaded(false);
        } else {
          //Works with the UpdateStatus function that I don't think I need. 
          //sound.current.setOnPlaybackStatusUpdate(UpdateStatus);
          SetLoading(false);
          SetLoaded(true);
          SetDuration(result.durationMillis);
          PlayAudio();
        }
      } catch (error) {
        SetLoading(false);
        SetLoaded(false);
      }
    } else {
      //hits this once the song is loaded and sets Loading to false and Loaded to true. 
      SetLoading(false);
      SetLoaded(true);
    }
    //Song is now loaded! 
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        //If song is loaded, we can set Playing to true. 
        if (result.isPlaying === false) {
          sound.current.playAsync();
          SetPlaying(true);
        }
      }
    } catch (error) {
      SetPlaying(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          //pauses the song if it's both loaded and playing
          sound.current.pauseAsync();
          SetPlaying(false);
        }
      }
    } catch (error) {
      SetPlaying(true);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>
         {Loading
          ? 'Loading Audio Please Wait...'
          : Playing === false
          ? `${Files[3].name}`
          : `Playing ${Files[3].name}`}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          alignItems: 'center',
        }}>


        {Loading ? (
          <ActivityIndicator size={'large'} color={'dodgerblue'} />
        ) : Loaded === false ? (
          <Ionicons
            name="md-reload-sharp"
            size={30}
            color="black"
            onPress={() => LoadAudio(3)}
          />
        ) : Playing ? (
          <Entypo
            name="controller-paus"
            size={40}
            color="black"
            onPress={() => PauseAudio()}
          />
        ) : (
          <Entypo
            name="controller-play"
            size={40}
            color="black"
            onPress={() => PlayAudio()}
          />
        )}

      </View>
    </View>
  );
}

//idx 4
export function EnceladusHiss() {

  const [Loaded, SetLoaded] = useState(false);
  const [Loading, SetLoading] = useState(false);
  const [Playing, SetPlaying] = useState(false);
  const [Duration, SetDuration] = useState(false);
  const CurrentIndex = useRef(0);
  const [Value, SetValue] = useState(0);

  //Unsure why useRef and not just the new Audio.Sound - let's research! 
  const sound = useRef(new Audio.Sound());

  const LoadAudio = async (index) => {
    //Load Audio starts by setting Loading to true! Makes sense! 
    SetLoading(true);
    //Gets status of the current sound (as created on line 33)
    const checkLoading = await sound.current.getStatusAsync();
    //if sound is not loaded, load sound with file from the Files array. Can maybe hardcode this for each track subcomponent. 
    if (checkLoading.isLoaded === false) {
      try {
        //result stores the sound once the song is loaded
        const result = await sound.current.loadAsync(
          Files[index].file,
          {},
          true
        );
        if (result.isLoaded === false) {
          //unsure why this is needed? Maybe for if it's the last track or something? I wonder if I won't need this since i'm using this for single track
          SetLoading(false);
          SetLoaded(false);
        } else {
          //Works with the UpdateStatus function that I don't think I need. 
          //sound.current.setOnPlaybackStatusUpdate(UpdateStatus);
          SetLoading(false);
          SetLoaded(true);
          SetDuration(result.durationMillis);
          PlayAudio();
        }
      } catch (error) {
        SetLoading(false);
        SetLoaded(false);
      }
    } else {
      //hits this once the song is loaded and sets Loading to false and Loaded to true. 
      SetLoading(false);
      SetLoaded(true);
    }
    //Song is now loaded! 
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        //If song is loaded, we can set Playing to true. 
        if (result.isPlaying === false) {
          sound.current.playAsync();
          SetPlaying(true);
        }
      }
    } catch (error) {
      SetPlaying(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          //pauses the song if it's both loaded and playing
          sound.current.pauseAsync();
          SetPlaying(false);
        }
      }
    } catch (error) {
      SetPlaying(true);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>
         {Loading
          ? 'Loading Audio Please Wait...'
          : Playing === false
          ? `${Files[4].name}`
          : `Playing ${Files[4].name}`}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          alignItems: 'center',
        }}>


        {Loading ? (
          <ActivityIndicator size={'large'} color={'dodgerblue'} />
        ) : Loaded === false ? (
          <Ionicons
            name="md-reload-sharp"
            size={30}
            color="black"
            onPress={() => LoadAudio(4)}
          />
        ) : Playing ? (
          <Entypo
            name="controller-paus"
            size={40}
            color="black"
            onPress={() => PauseAudio()}
          />
        ) : (
          <Entypo
            name="controller-play"
            size={40}
            color="black"
            onPress={() => PlayAudio()}
          />
        )}

      </View>
    </View>
  );
}

//idx 5 
export function InterstellarRadioWaves() {

  const [Loaded, SetLoaded] = useState(false);
  const [Loading, SetLoading] = useState(false);
  const [Playing, SetPlaying] = useState(false);
  const [Duration, SetDuration] = useState(false);
  const CurrentIndex = useRef(0);
  const [Value, SetValue] = useState(0);

  //Unsure why useRef and not just the new Audio.Sound - let's research! 
  const sound = useRef(new Audio.Sound());

  const LoadAudio = async (index) => {
    //Load Audio starts by setting Loading to true! Makes sense! 
    SetLoading(true);
    //Gets status of the current sound (as created on line 33)
    const checkLoading = await sound.current.getStatusAsync();
    //if sound is not loaded, load sound with file from the Files array. Can maybe hardcode this for each track subcomponent. 
    if (checkLoading.isLoaded === false) {
      try {
        //result stores the sound once the song is loaded
        const result = await sound.current.loadAsync(
          Files[index].file,
          {},
          true
        );
        if (result.isLoaded === false) {
          //unsure why this is needed? Maybe for if it's the last track or something? I wonder if I won't need this since i'm using this for single track
          SetLoading(false);
          SetLoaded(false);
        } else {
          //Works with the UpdateStatus function that I don't think I need. 
          //sound.current.setOnPlaybackStatusUpdate(UpdateStatus);
          SetLoading(false);
          SetLoaded(true);
          SetDuration(result.durationMillis);
          PlayAudio();
        }
      } catch (error) {
        SetLoading(false);
        SetLoaded(false);
      }
    } else {
      //hits this once the song is loaded and sets Loading to false and Loaded to true. 
      SetLoading(false);
      SetLoaded(true);
    }
    //Song is now loaded! 
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        //If song is loaded, we can set Playing to true. 
        if (result.isPlaying === false) {
          sound.current.playAsync();
          SetPlaying(true);
        }
      }
    } catch (error) {
      SetPlaying(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          //pauses the song if it's both loaded and playing
          sound.current.pauseAsync();
          SetPlaying(false);
        }
      }
    } catch (error) {
      SetPlaying(true);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>
         {Loading
          ? 'Loading Audio Please Wait...'
          : Playing === false
          ? `${Files[5].name}`
          : `Playing ${Files[5].name}`}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          alignItems: 'center',
        }}>


        {Loading ? (
          <ActivityIndicator size={'large'} color={'dodgerblue'} />
        ) : Loaded === false ? (
          <Ionicons
            name="md-reload-sharp"
            size={30}
            color="black"
            onPress={() => LoadAudio(5)}
          />
        ) : Playing ? (
          <Entypo
            name="controller-paus"
            size={40}
            color="black"
            onPress={() => PauseAudio()}
          />
        ) : (
          <Entypo
            name="controller-play"
            size={40}
            color="black"
            onPress={() => PlayAudio()}
          />
        )}

      </View>
    </View>
  );
}

//idx 6
export function WhistlerWaves() {

  const [Loaded, SetLoaded] = useState(false);
  const [Loading, SetLoading] = useState(false);
  const [Playing, SetPlaying] = useState(false);
  const [Duration, SetDuration] = useState(false);
  const CurrentIndex = useRef(0);
  const [Value, SetValue] = useState(0);

  //Unsure why useRef and not just the new Audio.Sound - let's research! 
  const sound = useRef(new Audio.Sound());

  const LoadAudio = async (index) => {
    //Load Audio starts by setting Loading to true! Makes sense! 
    SetLoading(true);
    //Gets status of the current sound (as created on line 33)
    const checkLoading = await sound.current.getStatusAsync();
    //if sound is not loaded, load sound with file from the Files array. Can maybe hardcode this for each track subcomponent. 
    if (checkLoading.isLoaded === false) {
      try {
        //result stores the sound once the song is loaded
        const result = await sound.current.loadAsync(
          Files[index].file,
          {},
          true
        );
        if (result.isLoaded === false) {
          //unsure why this is needed? Maybe for if it's the last track or something? I wonder if I won't need this since i'm using this for single track
          SetLoading(false);
          SetLoaded(false);
        } else {
          //Works with the UpdateStatus function that I don't think I need. 
          //sound.current.setOnPlaybackStatusUpdate(UpdateStatus);
          SetLoading(false);
          SetLoaded(true);
          SetDuration(result.durationMillis);
          PlayAudio();
        }
      } catch (error) {
        SetLoading(false);
        SetLoaded(false);
      }
    } else {
      //hits this once the song is loaded and sets Loading to false and Loaded to true. 
      SetLoading(false);
      SetLoaded(true);
    }
    //Song is now loaded! 
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        //If song is loaded, we can set Playing to true. 
        if (result.isPlaying === false) {
          sound.current.playAsync();
          SetPlaying(true);
        }
      }
    } catch (error) {
      SetPlaying(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          //pauses the song if it's both loaded and playing
          sound.current.pauseAsync();
          SetPlaying(false);
        }
      }
    } catch (error) {
      SetPlaying(true);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>
         {Loading
          ? 'Loading Audio Please Wait...'
          : Playing === false
          ? `${Files[6].name}`
          : `Playing ${Files[6].name}`}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          alignItems: 'center',
        }}>


        {Loading ? (
          <ActivityIndicator size={'large'} color={'dodgerblue'} />
        ) : Loaded === false ? (
          <Ionicons
            name="md-reload-sharp"
            size={30}
            color="black"
            onPress={() => LoadAudio(6)}
          />
        ) : Playing ? (
          <Entypo
            name="controller-paus"
            size={40}
            color="black"
            onPress={() => PauseAudio()}
          />
        ) : (
          <Entypo
            name="controller-play"
            size={40}
            color="black"
            onPress={() => PlayAudio()}
          />
        )}

      </View>
    </View>
  );
}

//idx 7
export function Stardust() {

  const [Loaded, SetLoaded] = useState(false);
  const [Loading, SetLoading] = useState(false);
  const [Playing, SetPlaying] = useState(false);
  const [Duration, SetDuration] = useState(false);
  const CurrentIndex = useRef(0);
  const [Value, SetValue] = useState(0);

  //Unsure why useRef and not just the new Audio.Sound - let's research! 
  const sound = useRef(new Audio.Sound());

  const LoadAudio = async (index) => {
    //Load Audio starts by setting Loading to true! Makes sense! 
    SetLoading(true);
    //Gets status of the current sound (as created on line 33)
    const checkLoading = await sound.current.getStatusAsync();
    //if sound is not loaded, load sound with file from the Files array. Can maybe hardcode this for each track subcomponent. 
    if (checkLoading.isLoaded === false) {
      try {
        //result stores the sound once the song is loaded
        const result = await sound.current.loadAsync(
          Files[index].file,
          {},
          true
        );
        if (result.isLoaded === false) {
          //unsure why this is needed? Maybe for if it's the last track or something? I wonder if I won't need this since i'm using this for single track
          SetLoading(false);
          SetLoaded(false);
        } else {
          //Works with the UpdateStatus function that I don't think I need. 
          //sound.current.setOnPlaybackStatusUpdate(UpdateStatus);
          SetLoading(false);
          SetLoaded(true);
          SetDuration(result.durationMillis);
          PlayAudio();
        }
      } catch (error) {
        SetLoading(false);
        SetLoaded(false);
      }
    } else {
      //hits this once the song is loaded and sets Loading to false and Loaded to true. 
      SetLoading(false);
      SetLoaded(true);
    }
    //Song is now loaded! 
  };

  const PlayAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        //If song is loaded, we can set Playing to true. 
        if (result.isPlaying === false) {
          sound.current.playAsync();
          SetPlaying(true);
        }
      }
    } catch (error) {
      SetPlaying(false);
    }
  };

  const PauseAudio = async () => {
    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying === true) {
          //pauses the song if it's both loaded and playing
          sound.current.pauseAsync();
          SetPlaying(false);
        }
      }
    } catch (error) {
      SetPlaying(true);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>
         {Loading
          ? 'Loading Audio Please Wait...'
          : Playing === false
          ? `${Files[7].name}`
          : `Playing ${Files[7].name}`}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          alignItems: 'center',
        }}>


        {Loading ? (
          <ActivityIndicator size={'large'} color={'dodgerblue'} />
        ) : Loaded === false ? (
          <Ionicons
            name="md-reload-sharp"
            size={30}
            color="black"
            onPress={() => LoadAudio(7)}
          />
        ) : Playing ? (
          <Entypo
            name="controller-paus"
            size={40}
            color="black"
            onPress={() => PauseAudio()}
          />
        ) : (
          <Entypo
            name="controller-play"
            size={40}
            color="black"
            onPress={() => PlayAudio()}
          />
        )}

      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffbaba',
    alignItems: 'center',
    padding: 8,
  },
});
