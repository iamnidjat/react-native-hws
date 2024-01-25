import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Audio } from "expo-av";
import BasicComponent from "../components/customComponents/BasicComponent";

const MusicPlayerScreen = () => {
  const [music, setMusic] = useState<Audio.Sound | undefined>();
  const [currentPosition, setCurrentPosition] = useState<number>(0);

  const PlayMusic = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/example.mp3")
      );
      setMusic(sound);
      if (!sound) return;
      await sound.playFromPositionAsync(currentPosition);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const PauseMusic = async () => {
    try {
      const status = await music?.getStatusAsync();
      // @ts-ignore
      setCurrentPosition(status.positionMillis);
      // @ts-ignore
      console.log(status.positionMillis);
      await music?.pauseAsync();
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const StopMusic = async () => {
    try {
      const status = await music?.stopAsync();
       // @ts-ignore
       setCurrentPosition(status.positionMillis);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const SeekForward = async (milliseconds: number) => {
    try {
      const status = await music?.getStatusAsync();
      if (status) {
         // @ts-ignore
        const newPosition = status.positionMillis + milliseconds;
        await music?.playFromPositionAsync(newPosition);
        setCurrentPosition(newPosition);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const SeekBackward = async (milliseconds: number) => {
    try {
      const status = await music?.getStatusAsync();
      if (status) {
         // @ts-ignore
        const newPosition = Math.max(0, status.positionMillis - milliseconds);
        await music?.playFromPositionAsync(newPosition);
        setCurrentPosition(newPosition);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    console.log("Current position: ", currentPosition);
  }, [currentPosition]);

  return (
    <View>
      <Text>Music Player</Text>
      <Pressable onPress={PlayMusic}>
        <Text>Play Music</Text>
      </Pressable>
      <Pressable onPress={PauseMusic}>
        <Text>Pause Music</Text>
      </Pressable>
      <Pressable onPress={StopMusic}>
        <Text>Stop Music</Text>
      </Pressable>
      <Pressable onPress={() => SeekForward(5000)}>
        <Text>Seek Forward 5s</Text>
      </Pressable>
      <Pressable onPress={() => SeekBackward(5000)}>
        <Text>Seek Backward 5s</Text>
      </Pressable>
      {/* <BasicComponent /> */}
    </View>
  );
};

export default MusicPlayerScreen;
