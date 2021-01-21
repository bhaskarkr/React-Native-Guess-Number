import React from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
export default class App extends React.Component {
  state = {
    goalList: [],
    isAddMode: false
  }

  addTextHandler = (goalTitle) => {
    let temp = [...this.state.goalList, { id: Math.random().toString(), value: goalTitle }];
    this.setState({ goalList: temp , isAddMode: false })
  };

  removeGoalHandler = (goalId) => {
    this.setState({goalList: this.state.goalList.filter( (goal)=> goal.id != goalId )});
  };

  cancelGoalAdding = () => {
    this.setState({isAddMode: false});
  }

  render() {
    return (
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => this.setState({isAddMode: true})}/>
        <GoalInput addTextHandler={this.addTextHandler} onCancel={this.cancelGoalAdding} visible={this.state.isAddMode}/>
        <FlatList
          keyExtractor={(item, index) => String(index)}
          data={this.state.goalList}
          renderItem={(goal) => {
            console.log("asdfsa",goal.item.id);
            return (<GoalItem id={goal.item.id}  onDelete={this.removeGoalHandler} title={goal.item.value} />);
          }}
        />
      </View>

    )
  };

}

const styles = StyleSheet.create({

  screen: {
    padding: 50
  }

});
