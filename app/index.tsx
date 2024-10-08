import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { prisma } from "@/prisma";

const welcome = () => {
  const [saved, setSaved] = useState("");

  const press = async () => {
    const user = await prisma.user
      .create({
        data: {
          email: "test@test.com",
          name: "test",
          password: "test",
          address: "test",
          phone: 1234,
        },
      })
      .then(async () => {
        prisma.$disconnect();
        setSaved(JSON.stringify(user));
      });
  };
  if (saved)
    return (
      <View>
        <Text>{saved}</Text>
      </View>
    );
  return (
    <View>
      <Text>welcome</Text>
      <Button title="TEST" onPress={press} />
    </View>
  );
};
export default welcome;

const styles = StyleSheet.create({});
