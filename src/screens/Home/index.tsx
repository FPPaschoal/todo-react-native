import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { ItemType } from "../../@types/Item";
import { Item } from "../../components/Item";

export function Home() {
  const [items, setItems] = useState<ItemType[]>([]);
  const [descriptionInput, setDescriptionInput] = useState<string>("");

  function handleItemAdd() {
    if (descriptionInput === "" || descriptionInput.trim() === "") {
      return Alert.alert("Insira uma tarefa!");
    }
    setItems((prevState) => [
      ...prevState,
      {
        description: descriptionInput,
        done: false,
        id: items.length === 0 ? 1 : items[items.length - 1].id + 1,
      },
    ]);
    setDescriptionInput("");
  }

  function handleItemDelete(itemToRemove: ItemType) {
    Alert.alert("Remover", "Deseja remover este item?", [
      {
        text: "sim",
        onPress: () =>
          setItems((prevState) =>
            prevState.filter((item) => item != itemToRemove)
          ),
      },
      {
        text: "não",
        style: "cancel",
      },
    ]);
  }

  function handleCheck(itemToCheck: ItemType) {
    const updatedItems = items.map((item) =>
      item.id === itemToCheck.id ? { ...item, done: !item.done } : item
    );
    setItems(updatedItems);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={require("../../img/logo.png")} />
      </View>

      <View style={styles.list}>
        <View style={styles.listHeader}>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderTextCriadas}>Criadas</Text>
            <Text style={styles.listHeaderNumber}>{items.length}</Text>
          </View>
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderTextConcluidas}>Concluídas</Text>
            <Text style={styles.listHeaderNumber}>
              {items.filter((item) => item.done === true).length}
            </Text>
          </View>
        </View>
        <FlatList
          contentContainerStyle={styles.listPopulated}
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Item
              ItemType={{
                id: item.id,
                done: item.done,
                description: item.description,
              }}
              onRemove={() => handleItemDelete(item)}
              onCheck={() => handleCheck(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.listEmpty}>
              <Image source={require("../../img/clipboard.png")} />
              <Text style={styles.listEmptyText1}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listEmptyText2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          }
        />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#808080"}
          onChangeText={(e) => setDescriptionInput(e)}
          value={descriptionInput}
        />
        <TouchableOpacity style={styles.button} onPress={handleItemAdd}>
          <Image source={require("../../img/plus.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
