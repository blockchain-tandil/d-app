import * as React from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

type IListState = {
  numbers: number[],
};

class List extends React.Component<{},IListState> {

  state: IListState = {
    numbers: []
  }

  handleOnClick = (e: any) => {
    console.log(e);
    this.setState(prevState => {
      prevState.numbers.push(e)
      const newState = {
        numbers : prevState.numbers,
      }
    return newState;
    })
  }

  render () {
    return (
      <div>
        <Input></Input>
        <Button>Save</Button>
      </div>
    )
  }
};

export default List;;
