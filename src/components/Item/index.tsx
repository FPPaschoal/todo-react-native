import { Image, View, Text, TouchableOpacity } from "react-native";
import { ItemType } from "../../@types/Item";
import { styles } from "./styles";

export function Item(props: {
  ItemType: ItemType;
  onRemove: (event: any) => void;
  onCheck: (event: any) => void;
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={props.ItemType.done ? styles.checkBoxChecked : styles.checkBox}
        onPress={props.onCheck}
      >
        <Text style={styles.checkBoxText}>
          {props.ItemType.done ? "✔" : ""}
        </Text>
      </TouchableOpacity>

      <Text
        style={
          props.ItemType.done ? styles.descriptionChecked : styles.description
        }
      >
        {props.ItemType.description}
      </Text>

      <TouchableOpacity style={styles.trash} onPress={props.onRemove}>
        <Image source={require("../../img/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
