import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { FontAwesome } from "@expo/vector-icons";
import { useDatabaseContext } from "../contexts/DatabaseContext";

const AudioPlayerScreen = () => {
  const dbContext = useDatabaseContext();
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [recordingStatus, setRecordingStatus] = useState("idle");
  const [audioPermission, setAudioPermission] = useState<boolean | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [items, setItems] = useState<AudioModel[]>([]);

  const handleRecordPress = async () => {
    try {
      console.log("a");
      const { granted } = await Audio.requestPermissionsAsync();
      setAudioPermission(granted);

      if (granted) {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          allowsRecordingIOS: true,
          interruptionModeAndroid: 2,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: true,
        });

        const newRecording = new Audio.Recording();
        await newRecording.prepareToRecordAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );

        await newRecording.startAsync();
        setRecordingStatus("recording");
        setRecording(newRecording);
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const handleStopRecording = async () => {
    console.log("b");
    if (!recording) return;

    try {
      if (recordingStatus === "recording") {
        await recording.stopAndUnloadAsync();
        const recordingUri: string = recording.getURI()!;

        const fileName = `recording-${Date.now()}.caf`;

        await FileSystem.makeDirectoryAsync(
          FileSystem.documentDirectory + "recordings/",
          {
            intermediates: true,
          }
        );

        await FileSystem.moveAsync({
          from: recordingUri,
          to: FileSystem.documentDirectory + "recordings/" + `${fileName}`,
        });

        setRecording(null);
        setRecordingStatus("stopped");
        dbContext.addItem(
          FileSystem.documentDirectory + "recordings/",
          fileName
        );
      }
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const PlayAudiosHandle = async (fileName: string) => {
    try {
      const sound = new Audio.Sound();
      await sound.loadAsync({
        uri: FileSystem.documentDirectory + "recordings/" + `${fileName}`,
      });
      setIsPlaying(true);
      await sound.playAsync();
      await sound.unloadAsync();
      setIsPlaying(false);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    dbContext.createDatabase();
    const fetchData = async () => {
      try {
        const fetchedItems = await dbContext.getAllItems();
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching items: ", error);
      }
    };

    fetchData();
  }, [recording]);

  return (
    <View style={styles.container}>
      <Text>Audio Player</Text>
      <TouchableOpacity style={styles.button} onPress={handleRecordPress}>
        <Text style={styles.text}>Record Audio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleStopRecording}>
        <Text style={styles.text}>Stop Audio</Text>
      </TouchableOpacity>
      <View>
        {items.map((sound) => (
          <View key={sound.fileName}>
            <Text style={{ color: "black" }}>Audio name: {sound.fileName}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => PlayAudiosHandle(sound.fileName)}
            >
              <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30}></FontAwesome>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "green",
    borderStyle: "solid",
    borderColor: "green",
    margin: 10,
  },
  text: {
    color: "white",
    padding: 10,
  },
});

export default AudioPlayerScreen;
