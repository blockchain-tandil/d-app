import * as React from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

type INumberListState = {
  numbers: number[],
  inputValue: string,
};

class NumberList extends React.Component<{},INumberListState> {

  state: INumberListState = {
    numbers: [],
    inputValue: '',
  }

  handleInputChange = (e: any) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleOnClick = () => {
    const { inputValue } = this.state;
    this.setState(prevState => {
      prevState.numbers.push(parseInt(inputValue));
      const newState = {
        numbers : prevState.numbers,
        inputValue: '',
      }
      return newState;
    })
  }

  render () {
    const { numbers, inputValue } = this.state;
    const { handleOnClick, handleInputChange } = this;
    return (
      <div>
        <Input 
          onChange={handleInputChange}
          value={inputValue}
          />
        <Button onClick={handleOnClick}>Save</Button>
        <List>
          {
            numbers.map(number => (
              <ListItem key={number}>
                <ListItemText
                  primary={number}
                />
              </ListItem>
            ))
          }
        </List>
        
      </div>
    )
  }
};

export default NumberList;
