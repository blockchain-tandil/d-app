import * as React from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

import { ethereum, web3 } from '../web3';
import logger from '../../contracts/Logger.json';

type INumberListState = {
  account: string,
  numbers: number[],
  inputValue: string,
  contractAddress: string,
  contractInstance: any,
};

class NumberList extends React.Component<{},INumberListState> {

  state: INumberListState = {
    account: "",
    numbers: [],
    inputValue: '',
    contractAddress: '0x353515bD9ee5dADdcd2D16d4dDdF891AF99C4D4f',
    contractInstance: {},
  }

  handleInputChange = (e: any) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleAddressChange = (e: any) => {
    this.setState({
      contractAddress: e.target.value,
    });
  }

  handleOnClick = async () => {
    const { inputValue, contractInstance, account } = this.state;
    console.log(contractInstance);
    await contractInstance.methods.store(inputValue).send({from: account});
    this.setState(prevState => {
      prevState.numbers.push(parseInt(inputValue));
      const newState = {
        numbers : prevState.numbers,
        inputValue: '',
      }
      return newState;
    })
  }

  async componentDidMount() {
    await ethereum.enable();
    const accounts = await web3.eth.getAccounts();      
    const { contractAddress } = this.state;
    const contractInstance = await(new web3.eth.Contract(logger.abi, contractAddress));
    this.setState({
      contractInstance,
      account: accounts[0],
    });
  }

  render () {
    const { numbers, inputValue, contractAddress } = this.state;
    const { handleOnClick, handleInputChange, handleAddressChange } = this;
    return (
      <div>
        <Grid container>
          <Grid item xs={8}>
            <Input 
              onChange={handleAddressChange}
              value={contractAddress}
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <Input 
              onChange={handleInputChange}
              value={inputValue}
              fullWidth
              />
            </Grid>
          <Grid item xs={4}>
            <Button onClick={handleOnClick}>Save</Button>
          </Grid>
          <Grid item xs={12}>
            <List>{numbers.map(number => (
              <ListItem key={number}>
                <ListItemText
                  primary={number}
                />
              </ListItem>))}
            </List>
          </Grid>
        </Grid>
      </div>
    )
  }
};

export default NumberList;
